import { NextResponse } from 'next/server'
import sql from '@/lib/db'
import { getGeminiModel } from '@/lib/gemini/client'
import { ENGINE_PROMPTS } from '@/lib/gemini/prompts'
import { checkCredits, deductCredits } from '@/lib/credits'
import { sendAnalysisEmail } from '@/lib/resend/emails'

// DAY 1 FIX: Prevent Vercel from timing out at 10 seconds.
export const maxDuration = 60; 

async function callAI(prompt: string) {
    // 1. Try OpenRouter first (User preference)
    try {
        if (!process.env.OPENROUTER_API_KEY) throw new Error('OPENROUTER_API_KEY missing');
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "HTTP-Referer": "https://launch-os.app",
                "X-Title": "LaunchOS",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "google/gemini-2.0-flash-001",
                messages: [{ role: "user", content: prompt }],
                response_format: { type: "json_object" }
            })
        });

        const data = await response.json();
        if (data.choices?.[0]?.message?.content) {
            return JSON.parse(data.choices[0].message.content);
        }
    } catch (err) {
        console.error('OpenRouter failed, falling back to Gemini SDK:', err);
    }

    // 2. Fallback to Gemini SDK
    try {
        const model = getGeminiModel('gemini-1.5-flash')
        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        })
        const text = result.response.text() || '{}'
        return JSON.parse(text);
    } catch (err) {
        console.error('Gemini SDK also failed:', err);
        return null;
    }
}

// Helper function to run a single engine
async function runEngine(key: string, idea: string, nicheData: any = null, validationData: any = null) {
    try {
        let promptContext = `\n\nStartup Idea: ${idea}\n\nReturn ONLY the JSON object.`
        
        if (key === 'validation') {
            promptContext = `\n\nUSER MESSAGE:\nStartup idea: ${idea}\nPrimary niche from Engine 1: ${nicheData?.niche_name || 'N/A'}\nNiche description: ${nicheData?.niche_description || 'N/A'}\n\nReturn ONLY the JSON object.`
        } else if (key === 'mvp') {
            promptContext = `\n\nUSER MESSAGE:\nStartup idea: ${idea}\nValidated niche: ${nicheData?.niche_name || 'N/A'}\nMarket verdict: ${validationData?.verdict || 'GO'}\nValidation score: ${validationData?.validation_score?.total || 50}/100\n\nReturn ONLY the JSON object.`
        } else if (key === 'pricing') {
            const mockMarketData = {
                upwork: "Average requests range from $45-$120/hr",
                fiverr: "Entry tiers ~$20, Pro tiers $300+",
                trends: "Stable growth over past 12 months",
                ph: "Similar tools charge $29/mo or $500 setup"
            }
            promptContext = `\n\nUSER MESSAGE:\nStartup idea: ${idea}\nNiche: ${nicheData?.niche_name || 'N/A'}\n\nEXTERNAL MARKET DATA SIGNALS:\nUpwork: ${mockMarketData.upwork}\nFiverr: ${mockMarketData.fiverr}\nTrends: ${mockMarketData.trends}\nProductHunt Competitors: ${mockMarketData.ph}\n\nReturn ONLY the JSON object.`
        } else if (key === 'outreach') {
            promptContext = `\n\nUSER MESSAGE:\nStartup idea: ${idea}\nTarget Niche: ${nicheData?.niche_name || 'N/A'}\n\nCreate a comprehensive free and paid outreach strategy following Alex Hormozi's framework. Return ONLY the JSON object.`
        }

        const prompt = `${ENGINE_PROMPTS[key as keyof typeof ENGINE_PROMPTS]}${promptContext}`
        const parsedData = await callAI(prompt);
        
        if (parsedData) {
           if (key === 'niche') {
               const redditQuery = parsedData.niche_name || idea;
               try {
                   const redditRes = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(redditQuery)}&sort=top&t=year&limit=3&type=link`, {
                       headers: { 'User-Agent': 'launchOS/1.0 (founder@launchos.app)' }
                   });
                   if (redditRes.ok) {
                       const redditJson = await redditRes.json();
                       parsedData.reddit_posts = redditJson.data?.children?.map((c: any) => ({
                           title: c.data.title,
                           subreddit: c.data.subreddit_name_prefixed,
                           upvotes: c.data.score,
                           url: `https://reddit.com${c.data.permalink}`
                       })) || [];
                   }
               } catch (e) {
                   console.error('Reddit API failed:', e);
                   parsedData.reddit_posts = [];
               }

               try {
                   const googleTrends = require('google-trends-api');
                   const trendsStr = await googleTrends.interestOverTime({ keyword: redditQuery });
                   const trendsJson = JSON.parse(trendsStr);
                   parsedData.trends = trendsJson?.default?.timelineData?.map((pt: any) => ({
                       date: pt.formattedTime,
                       value: pt.value[0]
                   })) || [];
               } catch (e) {
                   console.error('Trends API failed:', e);
                   parsedData.trends = [];
               }
           }
           
           return { key, data: parsedData, success: true }
        } else {
           throw new Error('AI returned no data')
        }
    } catch (error: any) {
        console.error(`[ERROR] Engine ${key} failed:`, error.message)
        return { key, data: null, success: false }
    }
}

export async function POST(req: Request) {
    try {
        const { idea, userId } = await req.json()
        console.log('--- STARTING ANALYSIS (Hybrid AI Stack) ---')
        console.log('Idea:', idea)
        console.log('User:', userId)
        
        if (!idea || !userId) {
            return NextResponse.json({ error: 'Missing idea or userId' }, { status: 400 })
        }

        // 1. Check user usage
        let [user] = await sql`
            SELECT email, full_name, plan_type, usage_count FROM users WHERE id = ${userId}
        ` as any[]

        if (!user) {
            console.log('Auto-creating user:', userId)
            const [newUser] = await sql`
                INSERT INTO users (id, email, plan_type, usage_count)
                VALUES (${userId}, 'demo@founder.os', 'free', 0)
                RETURNING email, full_name, plan_type, usage_count
            ` as any[]
            user = newUser
        }

        // --- 1.5 CHECK CREDITS BEFORE RUNNING AI ---
        const requiredCredits = 100; // First validation is 100 credits
        const creditCheck = await checkCredits(userId, requiredCredits);
        
        if (!creditCheck.success) {
            return NextResponse.json({ 
                error: creditCheck.error, 
                message: creditCheck.message, 
                code: 'UPGRADE_REQUIRED',
                upgradeUrl: creditCheck.upgradeUrl
            }, { status: 403 })
        }

        // 2. Run engines using Hybrid Parallel Execution (Day 1 Fix)
        console.log(`Running analysis using Hybrid Parallel Execution...`)
        
        // Step A: Run Niche Engine first (Base Dependency)
        console.log('[1/3] Running Niche Engine...');
        const nicheResult = await runEngine('niche', idea);
        const nicheData = nicheResult.data;

        // Step B: Run Validation Engine second (Depends on Niche)
        console.log('[2/3] Running Validation Engine...');
        const validationResult = await runEngine('validation', idea, nicheData);
        const validationData = validationResult.data;

        // Step C: Run remaining 8 engines in PARALLEL
        console.log('[3/3] Running remaining 8 engines in parallel...');
        const engineKeys = Object.keys(ENGINE_PROMPTS) as Array<keyof typeof ENGINE_PROMPTS>;
        const remainingKeys = engineKeys.filter(k => k !== 'niche' && k !== 'validation');
        
        const remainingPromises = remainingKeys.map(key => runEngine(key, idea, nicheData, validationData));
        const remainingResults = await Promise.all(remainingPromises);

        // Reconstruct results array in correct order
        const results = [
            nicheResult,
            validationResult,
            ...remainingResults
        ];

        console.log('All engines processed successfully in hybrid mode.')

        // 3. Prepare data for Neon
        const engineData: Record<string, any> = {}
        const columns = [
            'engine1_niche', 'engine2_validation', 'engine3_mvp', 'engine4_pricing',
            'engine5_outreach', 'engine6_competitor', 'engine7_investor', 'engine8_yc',
            'engine9_pivot', 'engine10_revenue'
        ]

        results.forEach((res, index) => {
            const colName = columns[index]
            engineData[colName] = res.data
        })

        // 4. Save to Neon
        console.log('Saving results to Neon...')
        const [analysis] = await sql`
            INSERT INTO analyses (
                user_id, 
                idea, 
                engine1_niche, 
                engine2_validation, 
                engine3_mvp, 
                engine4_pricing, 
                engine5_outreach, 
                engine6_competitor, 
                engine7_investor, 
                engine8_yc, 
                engine9_pivot, 
                engine10_revenue
            ) VALUES (
                ${userId}, 
                ${idea}, 
                ${engineData.engine1_niche}, 
                ${engineData.engine2_validation}, 
                ${engineData.engine3_mvp}, 
                ${engineData.engine4_pricing}, 
                ${engineData.engine5_outreach}, 
                ${engineData.engine6_competitor}, 
                ${engineData.engine7_investor}, 
                ${engineData.engine8_yc}, 
                ${engineData.engine9_pivot}, 
                ${engineData.engine10_revenue}
            )
            RETURNING id
        ` as any[]
        console.log('Analysis saved with ID:', analysis.id)

        // 5. Increment usage count
        await sql`
            UPDATE users SET usage_count = usage_count + 1 WHERE id = ${userId}
        `

        // 6. DEDUCT CREDITS AFTER SUCCESS
        await deductCredits(userId, requiredCredits, 'validation', analysis.id);

        // 7. SEND TRANSACTIONAL EMAIL REPORT VIA RESEND
        if (user && user.email) {
            sendAnalysisEmail(
                user.email,
                user.full_name || 'Founder',
                idea,
                analysis.id,
                nicheData?.niche_name || 'Startup Niche',
                validationData?.validation_score?.total || 75,
                validationData?.verdict || 'GO'
            ).catch(err => {
                console.error("Failed to send analysis report email:", err)
            })
        }

        return NextResponse.json({
            success: true,
            analysisId: analysis.id,
            results: results.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.data }), {})
        })

    } catch (error: any) {
        console.error('Analysis error:', error)
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
    }
}
