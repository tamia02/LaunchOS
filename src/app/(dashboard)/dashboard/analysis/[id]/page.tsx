'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { NicheEngine } from '@/components/engines/NicheEngine'
import { ValidationEngine } from '@/components/engines/ValidationEngine'
import { MVPEngine } from '@/components/engines/MVPEngine'
import { PricingEngine } from '@/components/engines/PricingEngine'
import { OutreachEngine } from '@/components/engines/OutreachEngine'
import { CompetitorEngine } from '@/components/engines/CompetitorEngine'
import { InvestorEngine } from '@/components/engines/InvestorEngine'
import { YCEngine } from '@/components/engines/YCEngine'
import { PivotEngine } from '@/components/engines/PivotEngine'
import { ProgressEngine } from '@/components/engines/ProgressEngine'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { getAnalysisById } from '@/lib/actions/analysis-actions'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

const engines = [
    { id: 'niche', name: 'Niche', number: '01' },
    { id: 'validation', name: 'Validation', number: '02' },
    { id: 'mvp', name: 'MVP', number: '03' },
    { id: 'pricing', name: 'Pricing', number: '04' },
    { id: 'outreach', name: 'Outreach', number: '05' },
    { id: 'competitor', name: 'Competitors', number: '06' },
    { id: 'investor', name: 'Investor', number: '07' },
    { id: 'yc', name: 'YC App', number: '08' },
    { id: 'pivot', name: 'Pivot', number: '09' },
    { id: 'progress', name: 'Progress', number: '10' },
]

const MOCK_ANALYSIS = {
    project_name: 'GardenOS',
    idea: 'An AI-powered garden planner that helps beginners grow vegetables.',
    created_at: 'March 30, 2026',
    niche: {
        project_name: 'GardenOS',
        niche_name: 'Urban Home Gardeners',
        niche_description: 'Beginner gardeners living in apartment buildings or urban areas with limited space. They want to grow their own food but don\'t know where to start.',
        why_this_niche_first: 'High enthusiasm, limited expertise, and clear physical constraints make this a perfect segment for personalized AI advice.',
        audience_size: '2.3M urban households',
        pain_level: 'High',
        willingness_to_pay: 'Medium',
        audience_profile: {
            age_range: "25-45",
            role_or_title: "Urban Professionals",
            income_range: "$60k-$120k",
            tech_savviness: "High",
            current_tools: ["Excel", "YouTube Tutorials", "Generic reminder apps"],
            biggest_frustration: "Buying expensive seeds and soil only to have everything die within 3 weeks.",
            dream_outcome: "A thriving balcony garden that yields fresh vegetables with minimal daily maintenance."
        },
        where_they_hang_out: {
            subreddits: ["UrbanGardening", "homestead", "IndoorGarden"],
            facebook_groups: ["Urban Gardening for Beginners", "Balcony Gardeners"],
            primary_platform: "Instagram",
            communities: ["Local Nursery Groups", "Permaculture Forums"],
            newsletters: ["The Daily Gardener"]
        },
        audience_tags: ['Urbanites', 'Eco-conscious', 'Beginners', 'Space-constrained', 'Organic-focused', 'Time-poor', 'Health-conscious', 'DIY-inclined'],
        secondary_niches: [
            { name: 'Suburban First-timers', reason: 'More space but same knowledge gap.', timing: 'Later', opportunity_level: 'High' },
            { name: 'Indoor Plant Lovers', reason: 'Already spending money, easy upsell to food.', timing: 'Eventually', opportunity_level: 'Medium' },
            { name: 'School Programs', reason: 'High retention but longer sales cycle.', timing: 'Eventually', opportunity_level: 'Low' }
        ],
        immediate_action: "Go to r/UrbanGardening right now. Search 'failed completely'. Find 3 people who complained in the last month about their tomatoes dying. DM them asking what exact setup they tried.",
        confidence_score: 8.5,
        confidence_reasoning: "Clear pain point, proven willingness to spend on physical supplies, and high volume of organic searches.",
        reddit_posts: [
            { title: "Why do my balcony tomatoes always die?", subreddit: "r/UrbanGardening", upvotes: 245, url: "#" },
            { title: "First harvest from my apartment window!", subreddit: "r/IndoorGarden", upvotes: 1102, url: "#" }
        ],
        trends: [
            { date: "Jan 2026", value: 30 }, { date: "Feb 2026", value: 45 }, { date: "Mar 2026", value: 85 }
        ]
    },
    validation: {
        verdict: 'GO',
        verdict_explanation: 'Strong market demand from urban gardeners actively searching for solutions. Willingness to pay for physical supplies indicates readiness for a digital planning tool.',
        verdict_confidence: 'High',
        market_size: {
            TAM: { value: '$8.4B', people: '12M households', explanation: 'Total global spend on urban/indoor gardening supplies and tools.' },
            SAM: { value: '$1.2B', people: '2.3M households', explanation: 'US-based apartment dwellers who actively purchase plants annually.' },
            SOM: { value: '$4.2M', people: '14,500 active users', explanation: 'Targeting 14.5k users at $29/year within the first 12 months.' }
        },
        demand_signals: [
            { signal_type: 'Reddit', metric: '1,240 posts', explanation: 'Posts about dying tomatoes or failed balcony gardens in the last year.' },
            { signal_type: 'Trends', metric: '+42% growth', explanation: 'Search interest for "indoor vegetable garden" up significantly year-over-year.' },
            { signal_type: 'Community', metric: '3.4M members', explanation: 'r/gardening and r/IndoorGarden have massive, highly engaged audiences.' },
            { signal_type: 'Competitor', metric: '$1.5M ARR', explanation: 'Planta (houseplants only) proves users will pay for a plant care subscription.' },
            { signal_type: 'Search', metric: '45,000/mo', explanation: 'Monthly searches for "balcony garden ideas" and "vegetable planting calendar".' }
        ],
        competitors: [
            { name: 'Planta', website: 'getplanta.com', what_they_do: 'Houseplant care reminders and diagnosis.', estimated_revenue: '$1.5M+ ARR', pricing: '$35.99/yr', biggest_weakness: 'Only focuses on decorative houseplants, no food crop logic.' },
            { name: 'Gardenate', website: 'gardenate.com', what_they_do: 'Basic chronological planting calendar by climate zone.', estimated_revenue: 'Unknown — bootstrapped', pricing: 'Free / Ad-supported', biggest_weakness: 'No personalized AI, awful UI, assumes you have a full backyard.' },
            { name: 'Seed to Spoon', website: 'seedtospoon.net', what_they_do: 'Garden planning app with strong seed selling integration.', estimated_revenue: 'Acquired by Park Seed', pricing: 'Free', biggest_weakness: 'Overwhelming interface aimed at homesteaders, not apartment beginners.' }
        ],
        keyword_data: [
            { keyword: 'apartment vegetable garden', monthly_searches: '12,100', trend: 'up', cpc_usd: '$1.45' },
            { keyword: 'balcony garden tomatoes', monthly_searches: '8,400', trend: 'stable', cpc_usd: '$0.85' },
            { keyword: 'indoor garden app', monthly_searches: '5,500', trend: 'up', cpc_usd: '$2.10' },
            { keyword: 'planting calendar by zip code', monthly_searches: '18,200', trend: 'up', cpc_usd: '$1.15' }
        ],
        market_timing: {
            verdict: 'Right Time',
            reasoning: 'Inflation is driving interest in home-grown food, while AI vision models finally make automated plant diagnosis reliable. Previous apps failed because they relied on manual user logging.',
            key_trend: 'GPT-4 vision API cost dropped 10x, making real-time plant health analysis economically viable for consumer apps.'
        },
        validation_score: {
            market_size: 16, demand_signals: 18, competitor_proof: 15, search_intent: 17, timing: 19, total: 85,
            interpretation: 'Exceptional opportunity. High pain, proven spending behavior, and a clear gap for an AI-native solution.'
        }
    },
    mvp: {
        core_feature: {
            name: 'AI Auto-Calendar',
            what_it_does: 'Generates a day-by-day watering and feeding schedule based solely on zipcode and plant type.',
            why_first: 'It solves the immediate "what do I do today" anxiety without requiring complex setup.',
            user_action: 'Enter Zip Code + Select "Tomato"',
            user_output: 'A clean 60-day checklist.'
        },
        build_now: [
            { feature_name: 'Zip Code Climate Matcher', why_essential: 'Gardening logic is entirely dependent on frost dates.', build_days: 2, depends_on: 'USDA API / Zip lookup' },
            { feature_name: 'Plant Database (Top 20)', why_essential: 'Cover 80% of beginner use cases (tomatoes, herbs, peppers).', build_days: 3, depends_on: 'Nothing — build first' },
            { feature_name: 'Daily SMS Reminders', why_essential: 'Push notifications are ignored; SMS forces daily engagement.', build_days: 2, depends_on: 'Twilio integration' },
            { feature_name: 'Stripe Paywall ($5/mo)', why_essential: 'Validate willingness to pay instantly before building diagnosis AI.', build_days: 2, depends_on: 'User accounts' }
        ],
        cut_for_now: [
            { feature_name: 'AI Leaf Diagnosis', why_cut: 'Complex to build, costs high API tokens, distraction from core scheduling.', when_to_add: 'After 100 paying users' },
            { feature_name: 'Community Forum', why_cut: 'Empty forums look dead and kill trust. Reddit already exists.', when_to_add: 'After 10,000 active users' },
            { feature_name: 'Seed Marketplace', why_cut: 'Logistical nightmare. Focus on software margins first.', when_to_add: 'After $10K MRR' },
            { feature_name: 'Native iOS/Android App', why_cut: 'App store approval slows down iteration. Build responsive web first.', when_to_add: 'After 500 paying users' }
        ],
        tech_stack: {
            frontend: { tool: 'Next.js + Tailwind', why: 'Fastest way to build SEO-friendly web apps with great UI.', free_tier: 'Vercel (Free)', monthly_cost_at_scale: '$20/mo', difficulty: 'Medium' },
            backend: { tool: 'Supabase', why: 'Postgres + Auth out of the box. Handles relational plant data well.', free_tier: 'Free up to 50k MAU', monthly_cost_at_scale: '$25/mo', difficulty: 'Easy' },
            database: { tool: 'Supabase (PostgreSQL)', why: 'Need relational data for pairing plants with climate zones.', free_tier: '500MB', monthly_cost_at_scale: 'Included', difficulty: 'Medium' },
            ai_layer: { tool: 'OpenAI GPT-4o-mini', why: 'Cheap, fast, enough reasoning for scheduling logic.', cost_per_call: '~$0.001', difficulty: 'Easy' },
            payments: { tool: 'Stripe Payment Links', why: 'Zero code required. Drop a link in the app to charge.', free_tier: '2.9% + 30¢', difficulty: 'Easy' },
            email: { tool: 'Resend', why: 'Developer-friendly API for transactional welcome emails.', free_tier: '3,000/mo', difficulty: 'Easy' },
            deployment: { tool: 'Vercel', why: 'One-click deploy for Next.js.', free_tier: 'Yes', difficulty: 'Easy' },
            analytics: { tool: 'PostHog', why: 'Product analytics + session recording to see where users get stuck.', free_tier: '1M events/mo', difficulty: 'Easy' },
            total_cost_0_users: '$0', total_cost_100_users: '$0', total_cost_1000_users: '~$45/mo'
        },
        build_timeline: [
            { week: 1, title: 'Data & Foundation', days: [{ day_range: 'Day 1', task: 'Setup Next.js, Supabase auth, and Tailwind.' }, { day_range: 'Day 2-3', task: 'Build simple database of top 20 beginner vegetables.' }, { day_range: 'Day 4-5', task: 'Create Zip Code to USDA Hardiness Zone lookup logic.' }] },
            { week: 2, title: 'Core Feature', days: [{ day_range: 'Day 6-8', task: 'Integrate GPT wrapper to output the 60-day watering schedule.' }, { day_range: 'Day 9-10', task: 'Build the front-end dashboard to display the schedule cleanly.' }] },
            { week: 3, title: 'Monetization & Polish', days: [{ day_range: 'Day 11-12', task: 'Add Stripe payment links (gate the full 60-day schedule).' }, { day_range: 'Day 13-14', task: 'Add SMS/Email reminder cron jobs.' }] },
            { week: 4, title: 'Launch', days: [{ day_range: 'Day 15', task: 'Deploy to Vercel.' }, { day_range: 'Day 16-20', task: 'Execute first paying customer path.' }] }
        ],
        first_paying_customer_path: [
            { step: 1, action: 'Search Reddit (r/UrbanGardening) for "first time" or "need help".', result: 'Find 30 absolute beginners.' },
            { step: 2, action: 'DM them: "Hey! I built a tool that tells you exactly when to water your balcony tomatoes based on your zip code. Want a free beta link?"', result: 'Get 10 people to click.' },
            { step: 3, action: 'Have them generate their schedule. Intercept with a $5 lifetime deal to unlock SMS tracking.', result: '1-2 people buy. You have revenue.' },
            { step: 4, action: 'Email the buyers immediately asking for a quick 10-min Zoom call to understand why they bought.', result: 'You learn the exact copy to use for your landing page.' }
        ],
        complexity_score: {
            technical: 5, integration: 4, design: 5, data: 7, overall: 5.25,
            build_time_solo: '2-3 weeks (assuming laser focus)', build_time_team_of_2: '7-10 days'
        },
        common_mistakes: [
            'Trying to build a massive plant database instead of focusing on the 10 most popular beginner plants.',
            'Building computer vision disease diagnosis before proving users will even open the app daily for watering.',
            'Making the user input too much manual data (sun hours, pot size) instead of assuming defaults.'
        ]
    },
    pricing: {
        startup_type: "product-based",
        business_model: "B2C",
        market_data_summary: {
            upwork_rate_range: "$45-90/hr",
            upwork_median: 65,
            fiverr_entry: 15,
            fiverr_mid: 45,
            fiverr_premium: 150,
            trend_direction: "growing",
            trend_insight: "High demand for gardening tools means users are willing to pay a premium for accuracy."
        },
        hourly_model: {
            beginner_rate: 45,
            standard_rate: 65,
            expert_rate: 90,
            currency: "USD",
            when_to_use: "Use when doing custom garden design consultations before the software is fully built. Great for early cash flow.",
            when_not_to_use: "Do not use for the SaaS app itself.",
            positioning_tip: "Frame the hourly rate as 'Expert Botanical Consultation' rather than 'Software Help'."
        },
        setup_fee_model: {
            simple_range: { min: 49, max: 99 },
            standard_range: { min: 149, max: 299 },
            complex_range: { min: 499, max: 999 },
            what_to_include: ["AI Soil Analysis", "Custom 12-Month Planting Calendar", "Pest Resistance Plan", "Seed Sourcing List", "1-on-1 Onboarding Call"],
            when_to_use: "Use a setup fee if you want to manually construct their first garden plan before giving them the software.",
            negotiation_tip: "Waive the setup fee if they commit to a 12-month retainer."
        },
        retainer_model: {
            starter: { price: 12, billing: "monthly", includes: ["1 Garden Bed", "AI Calendar", "Email Support", "Community Access"], hours_per_month: 0 },
            growth: { price: 29, billing: "monthly", includes: ["Unlimited Beds", "Pest Diagnosis AI", "Harvest Predictor", "Priority Support", "Seed Discounts"], hours_per_month: 0 },
            premium: { price: 99, billing: "monthly", includes: ["Automated Seed Delivery", "1-on-1 monthly check-in", "Unlimited AI Scans", "Sensor Integration", "VIP Support", "Priority Analytics"], hours_per_month: 1 },
            when_to_use: "This is your primary SaaS revenue model. Push most users here.",
            mrr_projection_6_months: "$12,500 MRR"
        },
        recommended_model: "retainer",
        recommended_reason: "GardenOS is a software product with ongoing utility. A monthly subscription aligns perfectly with the continuous planting and harvesting cycles of a garden. It ensures steady MRR rather than one-off revenue.",
        pricing_psychology: "Anchor the $29/mo Growth plan against the cost of a single dead batch of expensive organic seedlings ($50+).",
        price_anchoring_tip: "Show the actual cost of a failed garden (wasted soil, seeds, water, time) next to the $29/mo price tag.",
        upgrade_path: "Start users on the $12/mo plan, and hard-gate the AI Pest Diagnosis feature to trigger upgrades to $29/mo.",
        red_flags: ["Don't offer a lifetime deal. AI inference costs will eat your margins over time.", "Avoid pricing based on square footage, it penalizes power users."],
        competitor_comparison: "Similar non-AI apps charge $5-10/mo. You can charge $29/mo because the AI actively prevents plant death, creating a clear ROI."
    },
    outreach: {
        startup_type: "product",
        target_customer: {
            job_title: "Urban Professional (Hobbyist)",
            company_type: "Consumer",
            pain_point: "Wants to grow their own food but keeps killing plants because they don't understand local frost dates and soil types.",
            where_they_are_right_now: "Watching generic YouTube gardening videos that don't apply to their climate zone."
        },
        free_outreach: {
            google_maps_strategy: { search_query: 'Community Gardens near me', business_type: "Community Gardens", estimated_leads: "50-100 per city", cold_call_script: "Hey! We're giving away a free AI garden planner to local community gardens. Can I send you a link?", cold_email_template: "Hey [Name],\n\nI built an AI tool that creates perfect planting calendars specifically for [City]'s climate. Thought it might be useful for your community garden members.\n\nWant me to send over a free access link?" },
            reddit_strategy: { subreddits: ['r/vegetablegardening', 'r/UrbanGardening', 'r/gardening', 'r/homestead'], post_type: 'resource', post_title: 'I built a tool that tells you exactly when to plant based on your Zip Code', post_body: 'Got tired of guessing frost dates. Built this script. Put in your zip code, it spits out a calendar. Free to use right now while in beta.', comment_strategy: 'Answer plant-health questions matching your app\'s diagnostic output.' },
            linkedin_strategy: { target_titles: ['Sustainability Manager', 'Landscape Architect', 'Urban Farmer'], connection_note: 'Hey [Name], loved your recent post on urban sustainability.', day3_message: 'Curious what tools you use to plan large site plantings?', day5_message: 'I built an AI planner for this. Mind if I share a link for feedback?', daily_target: 20 },
            facebook_groups: { groups_to_join: ['Backyard Vegetable Farmers', 'Beginner Gardeners', 'Organic Urban Gardening', 'Container Gardeners'], posting_strategy: 'Post pictures of successful harvests and mention the AI planner helped time it properly.', dm_after_engagement: 'Hey! Thanks for the comment on my tomato post. The tool I used is called GardenOS if you want to try it.' },
            twitter_strategy: { search_queries: ['"first garden"', '"killed my plant"', '"what to plant in april"', '"gardening is hard"'], reply_approach: 'Diagnose their issue using the app, then paste the diagnosis and the app link.', dm_template: 'Hey! Saw your tweet about the dead tomatoes. GardenOS can prevent that next time. Free beta link here.' },
            whatsapp_telegram: { telegram_groups: ['Prepper Gardening', 'Organic Farmers', 'Balcony Gardens'], joining_strategy: 'Search relevant keywords in Telegram global search.', contribution_before_pitch: 'Share local frost date cheat sheets.', week3_message: 'Hey all, I automated the cheat sheets into an app if anyone wants to try it.' },
            slack_school: { slack_communities: ['ClimateTech', 'Mindful Living', 'Home Automation'], skool_communities: ['Permaculture Design', 'Urban Homesteading'], engagement_rule: 'Only pitch in the #shameless-plugs or #resources channels.' },
            cold_email_free: { lead_source: 'Scraping Instagram bio emails of micro-influencer gardeners.', subject_lines: ['Quick question about your garden', 'GardenOS beta invite', 'Thought you might like this'], email_body: 'Hey [Name],\n\nLove your garden content. I built an AI tool that creates hyper-local planting schedules. Would love for you to try it and give feedback.\n\nCan I send a link?', followup_day3: 'Hey, just bumping this. No worries if you\'re busy planting!', followup_day7: 'Final follow up - let me know if you ever want to try the beta!', daily_volume: 50 }
        },
        paid_outreach: {
            lead_generation: { recommended_tool: 'Apollo.io + Instagram Scrapers', why_recommended: 'Gardeners are consumers, so traditional B2B LinkedIn scraping won\'t work as well as social media extraction.', filter_settings: 'Keywords: "gardening", "urban farmer", "permaculture"', estimated_leads_per_month: '5,000+', cost: '$100/mo' },
            email_verification: { recommended_tool: 'NeverBounce', why: 'Essential for scraped social media emails to prevent domain burn.', cost_per_1000: '$8' },
            sending_platform: { recommended_tool: 'Instantly.ai', why_recommended: 'Allows unlimited sending accounts, crucial for high-volume B2C-style outreach.', email_sequence: [{day: 0, subject: 'Your garden', body: 'Hey, built an AI garden planner. Want to try it?', goal: 'Initial Contact'}, {day: 3, subject: 'Any thoughts?', body: 'Just floating this back up.', goal: 'Follow up'}], daily_send_volume: 200, cost: '$37/mo' },
            response_management: { crm_tool: 'HubSpot Free', booking_tool: 'Cal.com', reply_templates: { if_interested: 'Awesome, here is the link!', if_not_now: 'No problem, hit me up before spring planting!', if_asks_price: 'Free in beta, $12/mo later.' } },
            benchmark_metrics: { open_rate_target: '45%+', reply_rate_target: '3-5%', close_rate_target: '20% of replies', revenue_at_10_clients: '$120 - $290/mo' }
        },
        hormozi_principle_applied: "Provide 'Free Goodwill'. By giving away custom planting calendars for free on Reddit, you eliminate friction and build immediate trust before asking for a subscription.",
        week1_actions: ["1. Set up 3 sending domains and warm them up.", "2. Extract 500 emails from Instagram gardening pages.", "3. Post the 'Resource' template in 2 subreddits.", "4. DM 20 people on Twitter who complained about dead plants.", "5. Join 5 Facebook gardening groups.", "6. Launch first Instantly campaign to 100 leads.", "7. Review metrics and refine the email copy."],
        first_client_prediction: "Within 48 hours via Reddit. Within 7 days via Cold Email."
    },
    competitor: {
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
    }
}

function AnalysisPageInner() {
    const { id } = useParams()
    const router = useRouter()
    const searchParams = useSearchParams()
    const engineParam = searchParams.get('engine') || 'niche'

    const [analysis, setAnalysis] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [copied, setCopied] = useState(false)

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleExport = () => {
        if (!analysis) return
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(analysis, null, 2))
        const downloadAnchorNode = document.createElement('a')
        downloadAnchorNode.setAttribute("href", dataStr)
        downloadAnchorNode.setAttribute("download", `launchos_analysis_${id}.json`)
        document.body.appendChild(downloadAnchorNode)
        downloadAnchorNode.click()
        downloadAnchorNode.remove()
    }

    const handleRerun = () => {
        router.push('/dashboard')
    }

    useEffect(() => {
        const fetchAnalysis = async () => {
            if (!id) return
            try {
                const data = await getAnalysisById(id as string)
                const finalData: any = data || { idea: 'LaunchOS Mock Prototype' }
                
                const isValid = (obj: any) => obj && typeof obj === 'object' && Object.keys(obj).length > 2;
                const safeData = {
                    ...finalData,
                    niche: isValid(finalData.niche) ? finalData.niche : { ...MOCK_ANALYSIS.niche, project_name: finalData.idea || 'Project', _simulated: true },
                    validation: isValid(finalData.validation) ? finalData.validation : { ...MOCK_ANALYSIS.validation, project_name: finalData.idea || 'Project', _simulated: true },
                    mvp: isValid(finalData.mvp) ? finalData.mvp : { ...MOCK_ANALYSIS.mvp, name: `${finalData.idea || 'Project'} MVP`, _simulated: true },
                    pricing: isValid(finalData.pricing) ? finalData.pricing : { ...MOCK_ANALYSIS.pricing, project_name: finalData.idea || 'Project', _simulated: true },
                    outreach: isValid(finalData.outreach) ? finalData.outreach : { ...MOCK_ANALYSIS.outreach, project_name: finalData.idea || 'Project', _simulated: true },
                    competitor: isValid(finalData.competitor) ? finalData.competitor : { ...MOCK_ANALYSIS.competitor, project_name: finalData.idea || 'Project', _simulated: true },
                    investor: isValid(finalData.investor) ? finalData.investor : { ...MOCK_ANALYSIS.investor, _simulated: true },
                    yc: isValid(finalData.yc) ? finalData.yc : { ...MOCK_ANALYSIS.yc, company_name: finalData.idea || 'Project', _simulated: true },
                    pivot: isValid(finalData.pivot) ? finalData.pivot : { ...MOCK_ANALYSIS.pivot, _simulated: true },
                    progress: isValid(finalData.progress) ? finalData.progress : { ...MOCK_ANALYSIS.progress, project_name: finalData.idea || 'Project', _simulated: true },
                    created_at: finalData.created_at || MOCK_ANALYSIS.created_at
                }
                setAnalysis(safeData)
            } catch (err) {
                console.error('Failed to fetch analysis:', err)
            } finally {
                setLoading(false)
            }
        }
        fetchAnalysis()
    }, [id])

    const activeTab = engines.find(e => e.id === engineParam) ? engineParam : 'niche'

    const handleTabChange = (engineId: string) => {
        router.push(`/dashboard/analysis/${id}?engine=${engineId}`, { scroll: false })
    }

    const renderEngineOutput = () => {
        if (loading) return (
            <div className="flex items-center justify-center min-h-[400px]">
                <LoadingSpinner />
            </div>
        )
        if (!analysis) return <div className="text-center py-20 text-on-surface-variant/40">Protocol not found.</div>

        switch (activeTab) {
            case 'niche': return <NicheEngine data={analysis.niche} />
            case 'validation': return <ValidationEngine data={analysis.validation} />
            case 'mvp': return <MVPEngine data={analysis.mvp} />
            case 'pricing': return <PricingEngine data={analysis.pricing} />
            case 'outreach': return <OutreachEngine data={analysis.outreach} />
            case 'competitor': return <CompetitorEngine data={analysis.competitor} />
            case 'investor': return <InvestorEngine data={analysis.investor} />
            case 'yc': return <YCEngine data={analysis.yc} />
            case 'pivot': return <PivotEngine data={analysis.pivot} />
            case 'progress': return <ProgressEngine data={analysis.progress} />
            default: return null
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-16">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
                <div className="space-y-2 max-w-2xl">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-tertiary hover:tracking-[0.5em] transition-all duration-500">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Return to Dashboard
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-headline font-black tracking-tighter text-white leading-tight">
                        {analysis?.idea}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6">
                        <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">
                            ID: <span className="text-tertiary">{String(id).slice(0, 8)}</span>
                        </span>
                        {analysis?.[activeTab]?._simulated ? (
                            <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest">
                                Status: <span className="text-orange-400">SIMULATED DATA</span>
                            </span>
                        ) : (
                            <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">
                                Status: <span className="text-green-400">OPTIMAL</span>
                            </span>
                        )}
                        <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">
                            {analysis?.created_at}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high/60 text-on-surface-variant hover:text-white hover:bg-surface-container-highest transition-all duration-300 font-headline font-bold text-[9px] tracking-widest border border-white/5">
                        <span className="material-symbols-outlined text-base">{copied ? 'check' : 'share'}</span>
                        {copied ? 'Copied' : 'Share'}
                    </button>
                    <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high/60 text-on-surface-variant hover:text-white hover:bg-surface-container-highest transition-all duration-300 font-headline font-bold text-[9px] tracking-widest border border-white/5">
                        <span className="material-symbols-outlined text-base">description</span>
                        Export
                    </button>
                    <button onClick={handleRerun} className="bg-tertiary text-white flex items-center gap-2 px-5 py-2 rounded-lg font-headline font-bold text-[9px] tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 border border-white/10">
                        <span className="material-symbols-outlined text-base">sync</span>
                        Re-Run
                    </button>
                </div>
            </div>

            {/* Engine Tab Strip */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 no-scrollbar border-b border-white/5">
                {engines.map((engine) => {
                    const isActive = activeTab === engine.id
                    return (
                        <button
                            key={engine.id}
                            onClick={() => handleTabChange(engine.id)}
                            className={cn(
                                "flex flex-col items-start gap-0.5 px-4 py-2.5 transition-all duration-300 min-w-[100px] relative rounded-t-lg whitespace-nowrap",
                                isActive
                                    ? "bg-surface-container-high text-white"
                                    : "text-on-surface-variant/50 hover:text-on-surface-variant hover:bg-surface-container-low"
                            )}
                        >
                            <span className={cn("text-[9px] font-mono tracking-wider", isActive ? "text-tertiary" : "text-on-surface-variant/30")}>
                                {engine.number}
                            </span>
                            <span className="text-xs font-semibold">{engine.name}</span>
                            {isActive && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-tertiary rounded-full shadow-[0_0_8px_#679cff]" />}
                        </button>
                    )
                })}
            </div>

            {/* Engine Output */}
            <div key={activeTab} className="relative min-h-[400px]">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {renderEngineOutput()}
                </div>
            </div>
        </div>
    )
}

export default function AnalysisPage() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
                <div className="relative">
                    <div className="w-20 h-20 border-2 border-tertiary/20 border-t-tertiary rounded-full animate-spin shadow-[0_0_40px_rgba(103,156,255,0.15)]" />
                    <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-tertiary text-2xl">database</span>
                </div>
                <p className="text-white font-headline font-black tracking-widest text-xs">Loading Analysis...</p>
            </div>
        }>
            <AnalysisPageInner />
        </Suspense>
    )
}
