export const ENGINE_PROMPTS = {
  niche: `You are a startup market analyst. Analyze the idea and identify the best niche.
Return ONLY valid JSON with these exact keys:
{
  "project_name": "string",
  "niche_name": "string (5 words max)",
  "niche_description": "string (2 sentences)",
  "why_this_niche": "string (1 sentence)",
  "audience_size": "string (e.g. '2.3M households')",
  "pain_level": "Low/Medium/High/Critical",
  "audience_tags": ["array of 5 tags"],
  "where_they_hang_out": ["array of 4 communities"],
  "secondary_niches": ["array of 3 others"]
}`,

  validation: `You are a startup validation expert.
Return ONLY valid JSON with these exact keys:
{
  "project_name": "string",
  "overall_score": number (1-100),
  "verdict": "string (e.g. 'Strong Signals')",
  "market_size": "string (e.g. '$2.4B TAM')",
  "pain_score": number (1-10),
  "willingness_to_pay": "Low/Medium/High/Critical",
  "time_to_revenue": "string (e.g. '3-4 months')",
  "risk_level": "Low/Medium/High",
  "green_flags": ["array of 4"],
  "red_flags": ["array of 2"],
  "decision": "Build/Pivot/Stop",
  "decision_rationale": "string (2 sentences)",
  "competitor_gap": "string (1 sentence)"
}`,

  mvp: `You are a product builder. Design the simplest MVP.
Return ONLY valid JSON with these exact keys:
{
  "name": "string",
  "description": "string",
  "features": ["array of 4 core features"],
  "tech_stack": [
    {"name": "Next.js", "version": "14"},
    {"name": "OpenAI", "version": "GPT-4o"},
    {"name": "Supabase", "version": "v2"},
    {"name": "Stripe", "version": "v3"}
  ]
}`,

  pricing: `You are a SaaS pricing strategist.
Return ONLY valid JSON with these exact keys:
{
  "project_name": "string",
  "recommended_tier": "string",
  "tiers": [
    {
      "name": "string",
      "price": "string (e.g. '$12/mo')",
      "description": "string",
      "features": ["array of 3"],
      "recommended": boolean
    }
  ],
  "revenue_target": "string (e.g. '$10K MRR')",
  "rationale": "string (2 sentences)"
}`,

  outreach: `You are a growth expert. Create an outreach plan.
Return ONLY valid JSON with these exact keys:
{
  "project_name": "string",
  "strategy": "string",
  "templates": [
    {"subject": "string", "body": "string"}
  ],
  "campaigns": [
    {"name": "string", "status": "Active/Planned", "conversion_rate": "string (e.g. '4.2%')"}
  ]
}`,

  competitor: `You are a competitive intelligence analyst.
Return ONLY valid JSON with these exact keys:
{
  "project_name": "string",
  "competitors": [
    {
      "name": "string",
      "url": "string",
      "what_they_do": "string",
      "pricing": "string",
      "weakness": "string",
      "user_complaints": "string"
    }
  ],
  "market_gap": "string",
  "your_angle": "string",
  "positioning_statement": "string",
  "dont_compete_on": "string",
  "win_on": "string"
}`,

  investor: `You are a VC analyst. Score the idea.
Return ONLY valid JSON with these exact keys:
{
  "readiness_score": number (1-100),
  "grade": "string (A/B/C)",
  "verdict": "string",
  "scores": {
    "market_size": number (1-10),
    "problem_clarity": number (1-10),
    "solution_uniqueness": number (1-10),
    "business_model": number (1-10),
    "founder_market_fit": number (1-10),
    "scalability": number (1-10)
  },
  "strengths": ["array of 3"],
  "weaknesses": ["array of 3"],
  "to_reach_90": ["array of 3"],
  "investor_type": "string",
  "raise_amount": "string",
  "use_of_funds": ["array of 3"]
}`,

  yc: `You are a YC alumni. Write the application.
Return ONLY valid JSON with these exact keys:
{
  "company_name": "string",
  "one_liner": "string",
  "what_do_you_do": "string",
  "problem": "string",
  "solution": "string",
  "why_now": "string",
  "market_size": "string",
  "business_model": "string",
  "traction": "string",
  "why_us": "string",
  "competition": "string",
  "what_makes_you_different": "string",
  "yc_why": "string"
}`,

  pivot: `You are a startup pivot strategist.
Return ONLY valid JSON with these exact keys:
{
  "original_idea_assessment": "string",
  "pivots": [
    {
      "pivot_name": "string",
      "pivot_description": "string",
      "why_stronger": "string",
      "target_audience": "string",
      "revenue_potential": "string",
      "time_to_revenue": "string",
      "risk_level": "string"
    }
  ],
  "recommended_pivot": "string",
  "recommended_reason": "string"
}`,

  revenue: `You are a startup execution expert. Create a roadmap/progress plan.
Return ONLY valid JSON with these exact keys:
{
  "project_name": "string",
  "health_score": number (1-100),
  "time_to_mvp": "string (e.g. '14d')",
  "velocity": [array of 8 numbers for a chart, e.g. 20, 35, 28, 50, 45, 65, 72, 80],
  "milestones": [
    {
      "name": "string",
      "status": "completed/active/upcoming",
      "description": "string",
      "progress": number (0-100)
    }
  ],
  "strategic_focus": {
    "title": "string",
    "description": "string",
    "next_action": "string"
  },
  "risks": {
    "market": number (1-100),
    "speed": number (1-100),
    "capital": number (1-100),
    "tech": number (1-100)
  }
}`
}
