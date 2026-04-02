const fs = require('fs');

const replacement = `    competitor: {
        competitors: [
            { name: "Gardenate", website: "gardenate.com", what_they_do: "Basic plant calendar based on region.", pricing: "Free", founded: "2010", traction_signal: "1M+ App Downloads", biggest_weakness: "No AI or hyper-local data—relies on broad zones.", top_user_complaint: '"The recommendations tell me to plant in April, but it still freezes here in mid-April."', your_attack_angle: "Emphasize Zip-Code specific Micro-Climate AI." },
            { name: "Planta", website: "getplanta.com", what_they_do: "Care schedules primarily for indoor houseplants.", pricing: "$35/yr", founded: "2017", traction_signal: "$5M+ Revenue", biggest_weakness: "Terrible for outdoor vegetable farming.", top_user_complaint: '"Great for my Monstera, useless for my backyard tomatoes."', your_attack_angle: "Position exclusively as the tool for growing FOOD, not aesthetics." },
            { name: "Seed to Spoon", website: "seedtospoon.net", what_they_do: "Vegetable growing encyclopedia.", pricing: "Free / $5/mo", founded: "2015", traction_signal: "Acquired by Park Seed", biggest_weakness: "Outdated UI and overwhelming data without clear daily actions.", top_user_complaint: '"I just want it to tell me exactly what to do today. Too much reading."', your_attack_angle: "Focus purely on actionable daily tasks (streak tracker) rather than encyclopedic reading." }
        ],
        market_gap: "There is no modern, AI-first gardening app focused specifically on helping absolute beginners grow outdoor vegetables with zero prior knowledge.",
        positioning_statement: "Unlike general plant apps, GardenOS is the only AI garden planner that gives you hyper-local, daily instructions for growing food in your specific zip code.",
        blue_ocean_opportunity: "Targeting complete beginners in urban areas who want to grow their own food but are paralyzed by the fear of killing expensive plants.",
        dont_compete_on: "Total number of plant varieties supported.",
        win_on: "The success rate of the user's first harvest.",
        competitive_moat: "Proprietary database mapping micro-climate weather patterns to specific vegetable growth stages.",
        messaging_angles: [
            "Never kill a tomato plant again.",
            "The AI that knows your local weather better than the weatherman.",
            "Stop guessing. Start harvesting."
        ],
        pricing_gap: "Existing tools are either free and terrible, or expensive houseplant tools. There is a sweet spot at $8-12/mo for serious vegetable growers."
    },
    investor: {
        overall_score: 82,
        grade: "B+",
        verdict: "Strong pre-seed candidate. Clear pain point with a defined path to a $100M+ business if consumer retention holds.",
        dimension_scores: {
            market_size: { score: 7, reasoning: "US gardening is a $2.4B market, but software spend within it is historically low.", how_to_improve: "Prove willingness to pay for subscriptions, not just physical goods." },
            problem_clarity: { score: 9, reasoning: "High failure rate for new gardeners is a known, acute pain point.", how_to_improve: "Quantify the average financial loss per failed garden." },
            solution_uniqueness: { score: 8, reasoning: "AI micro-climate planning is highly defensible compared to static calendars.", how_to_improve: "File provisional patents on the specific AI scheduling algorithm." },
            business_model: { score: 7, reasoning: "SaaS for consumers is notoriously hard to retain past year 1.", how_to_improve: "Integrate seed purchasing to add an e-commerce revenue stream." },
            go_to_market: { score: 9, reasoning: "Excellent leveraging of existing organic communities (Reddit, Facebook).", how_to_improve: "Automate the Tiktok/Reels content generation." },
            founder_market_fit: { score: 8, reasoning: "Technical founder with farming background is the ideal combination.", how_to_improve: "Bring on an advisor who has scaled a consumer app to 1M+ users." }
        },
        strengths: ["Clear differentiation from legacy competitors", "High virality potential in visual social media", "Low initial capital expenditure required to prove MVP"],
        weaknesses: ["Consumer SaaS churn risk", "Seasonality of the business (winter months)", "Reliance on third-party weather APIs"],
        to_reach_90_score: ["Achieve $10K MRR", "Show a 6-month retention rate above 40%", "Launch the seed-marketplace integration", "Recruit a technical co-founder", "File provisional patent on the climate algorithm"],
        similar_funded_companies: [
            { name: "Planta", raised: "$5M+", stage: "Series A", investor: "Spintop Ventures", why_relevant: "Proved consumers will pay a subscription for plant care." },
            { name: "Farmers Business Network", raised: "$800M+", stage: "Pre-IPO", investor: "GV / Kleiner Perkins", why_relevant: "Proved agricultural data is highly monetizable (though B2B)." }
        ],
        investor_type: "Pre-seed VC / Consumer Angels",
        investor_type_reason: "You have a prototypical consumer SaaS. You need investors who understand community-led growth and consumer psychology, not deep tech.",
        raise_recommendation: {
            amount: "$500K",
            stage: "Pre-Seed",
            valuation_range: "$3M - $5M Post-Money",
            when_to_raise: "After reaching $2,000 MRR"
        },
        use_of_funds: [
            { category: "Product Development", percentage: 50, description: "Hire 1 senior full-stack engineer." },
            { category: "Performance Marketing", percentage: 30, description: "Scale Meta and TikTok ads to find CAC floor." },
            { category: "Operations & Tools", percentage: 20, description: "API costs for weather and AI inference." }
        ],
        red_flag_for_investors: "If your churn spikes in November because users stop gardening for the winter, investors will walk away.",
        investor_one_liner: "It's Noom but for gardening; an AI app that finally guarantees a successful harvest for urban millennials."
    },
    yc: {
        company_name: "GardenOS",
        one_liner: "GardenOS is a local-climate AI for urban millennials that guarantees successful vegetable harvests.",
        what_do_you_do: "Urban millennials spend hundreds of dollars on seeds and soil only to watch everything die because they follow generic advice. GardenOS fixes this. Our AI correlates hyper-local weather patterns, soil data, and specific plant varieties to generate a day-by-day action plan.",
        the_problem: "A new gardener in Chicago tries to grow tomatoes. They follow a YouTube video made by someone in California. A late May frost kills everything overnight. Total loss: $150 and 8 weeks of time. They give up and never try again.",
        target_customers: "Urban and suburban millennials (25-40). Primarily homeowners or renters with balconies. There are 18 million new gardeners in the US since 2020.",
        how_you_make_money: "Freemium SaaS. Basic calendar is free. AI diagnostics and specific action alerts cost $12/month or $60/year. Current MRR: [FILL IN].",
        money_raised: "[FILL IN: amount raised or Bootstrapped]",
        monthly_revenue: "[FILL IN: current MRR] growing at [FILL IN]% month over month",
        growth_rate: "[FILL IN] new users per week. Week over week growth: [FILL IN]%",
        competitors: "Planta focuses purely on house plants, not food. Gardenate uses static, broad USDA zones that fail to account for micro-climates. Our advantage is using an LLM to actively synthesize real-time weather and specific constraints.",
        what_you_understand: "Competitors think users want to learn horticulture. They don't. They want the satisfaction of eating a tomato they grew themselves without having to do the mental labor of becoming a farmer. We abstract away the learning curve entirely.",
        first_1000_customers: "Direct outreach inside r/vegetablegardening and hyper-local Facebook community gardening groups. We will intercept people asking 'why did my plant die' with a free beta link to our AI diagnostics tool.",
        why_this_idea: "I grew up on a farm in Ohio and spent the last 4 years building ML infrastructure. When I moved to a city apartment, even I killed my balcony plants. I realized the data gap is immense.",
        how_long_working: "[FILL IN]. Here is what we have built so far: [FILL IN]",
        why_now: "GPT-4 Vision now makes real-time plant disease diagnosis cheap and immediate. Additionally, post-pandemic inflation has driven a massive resurgence in people trying to grow their own food.",
        unfair_advantage: "We are building a proprietary dataset matching specific micro-climate outcomes to plant success. Over time, our model gets smarter based on local outcomes.",
        yc_why: "We need YC's specific expertise in scaling consumer subscription apps."
    },
    pivot: {
        original_idea_assessment: "The core thesis (AI for plants) is highly validated and technically viable. However, the B2C software market for gardening is notoriously difficult to monetize and faces high seasonal churn.",
        original_idea_verdict: "Needs Pivoting",
        pivot_type_selected: ["Business Model", "Customer Segment", "Zoom Out"],
        pivots: [
            {
                pivot_number: 1,
                pivot_type: "Business Model",
                pivot_name: "GardenOS Seed Club",
                one_liner: "A subscription box for seeds that includes free access to the AI planner.",
                description: "Instead of charging for software, the software is free. You charge $15/month for a curated box of seeds perfectly timed for their local climate zone.",
                why_stronger: "Consumers are much more willing to pay for physical goods than software. The app becomes a retention tool for the physical subscription.",
                target_customer: "Busy parents who want to garden with their kids but hate planning.",
                revenue_model: "Physical Subscription Box",
                revenue_potential: "High",
                time_to_first_revenue: "4 Weeks",
                risk_level: "High",
                effort_to_build: "Medium",
                real_world_example: "KiwiCo but for gardening.",
                first_step_today: "Create a mock box using existing seeds and pre-sell 10 on a Facebook mom group."
            },
            {
                pivot_number: 2,
                pivot_type: "Customer Segment",
                pivot_name: "YieldAI",
                one_liner: "AI climate modeling for commercial micro-farms and urban greenhouses.",
                description: "Take the exact same AI engine, but sell it to commercial urban farmers who grow microgreens for local restaurants.",
                why_stronger: "B2B SaaS has vastly better retention and higher ACV. Eliminates the seasonality issue since commercial growers usually use temperature-controlled environments.",
                target_customer: "Owners of urban commercial greenhouses.",
                revenue_model: "$299/mo B2B SaaS",
                revenue_potential: "Very High",
                time_to_first_revenue: "8 Weeks",
                risk_level: "Medium",
                effort_to_build: "High",
                real_world_example: "Bowery Farming's internal OS.",
                first_step_today: "Call 5 local commercial urban farms and ask how they track yield variations against climate."
            },
            {
                pivot_number: 3,
                pivot_type: "Zoom Out",
                pivot_name: "HyperLocal Weather SDK",
                one_liner: "An API that correlates any physical asset against hyper-local micro-climates.",
                description: "Stop building the consumer app altogether. Repackage the engine you built as an API.",
                why_stronger: "You become the infrastructure provider. One massive API contract is easier to manage than 10,000 angry free-tier users.",
                target_customer: "CTOs of weather-dependent consumer apps.",
                revenue_model: "Usage-based API",
                revenue_potential: "Very High",
                time_to_first_revenue: "12 Weeks",
                risk_level: "Medium",
                effort_to_build: "High",
                real_world_example: "DarkSky API",
                first_step_today: "Map out the schema of your current backend and see if it can be decoupled."
            }
        ],
        recommended_pivot: 1,
        recommended_reason: "The Seed Club pivot perfectly aligns with your existing go-to-market strategy while solving the biggest problem: willingness to pay.",
        pivot_vs_original: "Seed boxes command $15-$30/mo vs $5-$10/mo for software. The LTV is likely 3x higher.",
        validation_test: "Spin up a Carrd landing page offering the subscription box today. See if you can get 5 people to prepay $15."
    },
    revenue: {
        current_phase: "Launch",
        overall_progress: 35,
        days_completed: 12,
        days_remaining: 18,
        milestones: [
            { name: "Validate Idea on Reddit", status: "completed", target_day: 3, completed_day: 4, celebration_message: "Awesome, 50 people want exactly what you are building!" },
            { name: "Get first 10 waitlist signups", status: "completed", target_day: 7, completed_day: 8, celebration_message: "You have real demand." },
            { name: "Build MVP (Core Planner)", status: "active", target_day: 15, completed_day: null, celebration_message: "" },
            { name: "Launch on ProductHunt", status: "upcoming", target_day: 22, completed_day: null, celebration_message: "" },
            { name: "First $100 Revenue", status: "upcoming", target_day: 30, completed_day: null, celebration_message: "" }
        ],
        streak: {
            current_streak: 5,
            longest_streak: 5,
            streak_message: "You are on fire! 5 days in a row of meaningful progress."
        },
        next_action: {
            action: "Finish the weather SDK integration.",
            why_this: "Without climate data, the app is just a static calendar. This is the entire value prop.",
            time_required: "2 Hours",
            difficulty: "Hard"
        },
        todays_task: {
            day_number: 12,
            phase: "Build",
            title: "Connect the Weather API to User Location",
            description: "Yesterday you built the user location intake. Today, connect that zip code to the free OpenWeather API. Ensure that the JSON response is storing the 'last_frost_date' specifically.",
            success_criteria: "When a user enters a zip code, the database successfully saves their exact average frost date.",
            resources: ["OpenWeather API Docs", "Supabase Edge Functions"]
        },
        week_ahead: [
            { day: 13, title: "Build the Output Calendar", phase: "Build", estimated_time: "4 Hours" },
            { day: 14, title: "Test with 3 beta users", phase: "Launch", estimated_time: "1 Hour" },
            { day: 15, title: "Fix Beta bugs", phase: "Launch", estimated_time: "3 Hours" }
        ],
        blockers: [
            { blocker: "Getting lost in complex React UI animations instead of shipping the core logic.", solution: "Use standard Tailwind components and focus ONLY on the weather data matching." }
        ],
        motivation_message: "You are doing exactly what 99% of people fail to do: continuing to build when the excitement wears off. Just ship the API integration today.",
        phase_completion_prediction: "On track to hit MVP ahead of schedule based on current velocity.",
        adjustment_recommendation: null
    }`;

let content = fs.readFileSync('c:/Users/tasmi/OneDrive/launchOS/src/app/(dashboard)/dashboard/analysis/[id]/page.tsx', 'utf8');

let startIndex = content.indexOf('    competitor: {');
let endIndex = content.indexOf('function AnalysisPageInner');

if (startIndex > -1 && endIndex > -1) {
    let before = content.substring(0, startIndex);
    let after = content.substring(endIndex);
    let finalContent = before + replacement + "\n}\n\n" + after;
    fs.writeFileSync('c:/Users/tasmi/OneDrive/launchOS/src/app/(dashboard)/dashboard/analysis/[id]/page.tsx', finalContent);
    console.log("SUCCESS");
} else {
    console.log("Failed to find index");
}
