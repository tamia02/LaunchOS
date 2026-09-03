import { NextResponse } from 'next/server'
import { after } from 'next/server'
import sql from '@/lib/db'
import { getGeminiModel } from '@/lib/gemini/client'
import { ENGINE_PROMPTS } from '@/lib/gemini/prompts'
import { deductCredits } from '@/lib/credits'
import { sendAnalysisEmail } from '@/lib/resend/emails'

// Internal-only route, triggered by /api/analyze right after it creates a
// pending row. Does the actual AI work, which can legitimately take several
// minutes across 10 engines, so it responds immediately and keeps working in
// the background via after() up to maxDuration.
export const maxDuration = 300;

const ENGINE_COLUMNS: Record<string, string> = {
    niche: 'engine1_niche', validation: 'engine2_validation', mvp: 'engine3_mvp',
    pricing: 'engine4_pricing', outreach: 'engine5_outreach', competitor: 'engine6_competitor',
    investor: 'engine7_investor', yc: 'engine8_yc', pivot: 'engine9_pivot', revenue: 'engine10_revenue'
}

function extractJson(text: string) {
    const cleaned = text.replace(/```json\s*|```/g, '').trim()

    try {
        return JSON.parse(cleaned)
    } catch {
        // fall through to brace-matching extraction below
    }

    const start = cleaned.indexOf('{')
    if (start === -1) throw new Error('No JSON object found in response')

    // Walk the string tracking brace depth so we stop at the FIRST object's
    // true closing brace, ignoring braces that appear inside string values
    // and any trailing commentary the model tacks on afterward.
    let depth = 0
    let inString = false
    let escaped = false
    for (let i = start; i < cleaned.length; i++) {
        const ch = cleaned[i]
        if (inString) {
            if (escaped) escaped = false
            else if (ch === '\\') escaped = true
            else if (ch === '"') inString = false
            continue
        }
        if (ch === '"') inString = true
        else if (ch === '{') depth++
        else if (ch === '}') {
            depth--
            if (depth === 0) return JSON.parse(cleaned.slice(start, i + 1))
        }
    }
    throw new Error('No complete JSON object found in response')
}

// This route runs with a generous maxDuration, so NVIDIA's Nemotron models
// (reasoning models that measured 15-90s+ per call on this app's large
// structured-JSON prompts) can be the primary provider. Gemini is only used
// as an emergency fallback if NVIDIA hard-fails, not for routine slowness.
const NVIDIA_TIMEOUT_MS = 100000
const GEMINI_TIMEOUT_MS = 15000

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
    let timer: ReturnType<typeof setTimeout>
    const timeout = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms)
    })
    return Promise.race([promise, timeout]).finally(() => clearTimeout(timer))
}

async function callNvidia(prompt: string, model: string) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), NVIDIA_TIMEOUT_MS)
    try {
        const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model,
                messages: [{ role: "user", content: `${prompt}\n\nRespond with ONLY the raw JSON object, no markdown fences, no commentary. The output must be strictly valid JSON: escape every double-quote character that appears inside a string value with a backslash, and never use a literal newline inside a string value.` }],
                max_tokens: 6000,
                temperature: 0.6
            }),
            signal: controller.signal
        });

        if (response.status === 503) {
            throw new Error('NVIDIA overloaded (503)');
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;
        if (!content) {
            throw new Error(`NVIDIA response missing content: ${JSON.stringify(data).slice(0, 500)}`);
        }
        return extractJson(content);
    } finally {
        clearTimeout(timer)
    }
}

async function callAI(prompt: string) {
    // 1. Try NVIDIA Nemotron first (Primary)
    if (process.env.NVIDIA_API_KEY) {
        try {
            return await callNvidia(prompt, "nvidia/nemotron-3-super-120b-a12b");
        } catch (err) {
            console.error('NVIDIA Nemotron failed, falling back to Gemini SDK:', err);
        }
    } else {
        console.error('NVIDIA_API_KEY missing, skipping straight to Gemini SDK');
    }

    // 2. Emergency fallback to Gemini SDK
    try {
        const model = getGeminiModel('gemini-3.6-flash')
        const result = await withTimeout(model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        }), GEMINI_TIMEOUT_MS, 'Gemini SDK')
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

async function updateEngineColumn(analysisId: string, key: string, data: any) {
    const column = ENGINE_COLUMNS[key]
    await sql.unsafe(`UPDATE analyses SET ${column} = $1::jsonb WHERE id = $2`, [data, analysisId])
}

async function processAnalysis(analysisId: string, idea: string, userId: string) {
    try {
        console.log(`[${analysisId}] Running analysis (NVIDIA-primary background job)...`)

        // Step A: Niche (base dependency)
        console.log(`[${analysisId}] [1/3] Running Niche Engine...`);
        const nicheResult = await runEngine('niche', idea);
        const nicheData = nicheResult.data;
        await updateEngineColumn(analysisId, 'niche', nicheData);

        // Step B: Validation (depends on niche)
        console.log(`[${analysisId}] [2/3] Running Validation Engine...`);
        const validationResult = await runEngine('validation', idea, nicheData);
        const validationData = validationResult.data;
        await updateEngineColumn(analysisId, 'validation', validationData);

        // Step C: Remaining 8 engines in parallel, each updating its own column as it resolves
        console.log(`[${analysisId}] [3/3] Running remaining 8 engines in parallel...`);
        const engineKeys = Object.keys(ENGINE_PROMPTS) as Array<keyof typeof ENGINE_PROMPTS>;
        const remainingKeys = engineKeys.filter(k => k !== 'niche' && k !== 'validation');

        const remainingResults = await Promise.all(remainingKeys.map(async (key) => {
            const result = await runEngine(key, idea, nicheData, validationData);
            await updateEngineColumn(analysisId, key, result.data);
            return result;
        }));

        console.log(`[${analysisId}] All engines processed.`)

        // Mark complete
        await sql`UPDATE analyses SET status = 'complete' WHERE id = ${analysisId}`

        // Increment usage count
        await sql`UPDATE users SET usage_count = usage_count + 1 WHERE id = ${userId}`

        // Deduct credits
        const requiredCredits = 100;
        await deductCredits(userId, requiredCredits, 'validation', analysisId);

        // Send transactional email report
        const [user] = await sql`SELECT email, full_name FROM users WHERE id = ${userId}` as any[]
        if (user && user.email) {
            try {
                await sendAnalysisEmail(
                    user.email,
                    user.full_name || 'Founder',
                    idea,
                    analysisId,
                    nicheData?.niche_name || 'Startup Niche',
                    validationData?.validation_score?.total || 75,
                    validationData?.verdict || 'GO'
                )
            } catch (err) {
                console.error(`[${analysisId}] Failed to send analysis report email:`, err)
            }
        }

        console.log(`[${analysisId}] Processing complete.`)
    } catch (error: any) {
        console.error(`[${analysisId}] Processing failed:`, error)
        await sql`UPDATE analyses SET status = 'failed' WHERE id = ${analysisId}`
    }
}

export async function POST(req: Request) {
    const secret = req.headers.get('x-internal-secret')
    if (!secret || secret !== process.env.INTERNAL_API_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { analysisId, idea, userId } = await req.json()
    if (!analysisId || !idea || !userId) {
        return NextResponse.json({ error: 'Missing analysisId, idea, or userId' }, { status: 400 })
    }

    // Idempotency guard: don't reprocess a row that's already done
    const [row] = await sql`SELECT status FROM analyses WHERE id = ${analysisId}` as any[]
    if (!row) {
        return NextResponse.json({ error: 'Analysis not found' }, { status: 404 })
    }
    if (row.status !== 'processing') {
        return NextResponse.json({ accepted: true, skipped: true })
    }

    after(() => processAnalysis(analysisId, idea, userId))

    return NextResponse.json({ accepted: true })
}
