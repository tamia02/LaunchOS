import { getResend } from './client'

// Brand Color variables matching the launchOS dark mode visual system:
// Primary: #3b82f6 (glowing blue)
// Background: #030712 (dark carbon)
// Surface: #0f172a (glass card)

/**
 * Returns the HTML for a beautiful, premium welcome email for new founders.
 */
function getWelcomeEmailHtml(name: string): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Welcome to launchOS</title>
        <style>
            body {
                background-color: #030712;
                color: #f3f4f6;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
            }
            .wrapper {
                background-color: #030712;
                padding: 40px 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #0d121f;
                border: 1px solid rgba(59, 130, 246, 0.15);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            }
            .header {
                padding: 40px 40px 20px 40px;
                text-align: center;
            }
            .logo {
                font-size: 24px;
                font-weight: 800;
                letter-spacing: -0.05em;
                color: #ffffff;
                text-decoration: none;
            }
            .logo span {
                color: #3b82f6;
            }
            .content {
                padding: 0 40px 40px 40px;
            }
            h1 {
                font-size: 26px;
                font-weight: 800;
                color: #ffffff;
                margin-top: 0;
                margin-bottom: 16px;
                line-height: 1.2;
                letter-spacing: -0.02em;
            }
            p {
                font-size: 16px;
                line-height: 1.6;
                color: #9ca3af;
                margin-top: 0;
                margin-bottom: 24px;
            }
            .highlight {
                color: #3b82f6;
                font-weight: 600;
            }
            .cta-container {
                text-align: center;
                margin-bottom: 32px;
                margin-top: 32px;
            }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #c4c7c9 0%, #444749 100%);
                color: #000000 !important;
                text-decoration: none;
                font-size: 15px;
                font-weight: 700;
                padding: 16px 36px;
                border-radius: 8px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
            }
            .features-grid {
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                padding: 24px;
                margin-bottom: 32px;
            }
            .feature-item {
                margin-bottom: 16px;
            }
            .feature-item:last-child {
                margin-bottom: 0;
            }
            .feature-title {
                font-size: 14px;
                font-weight: 700;
                color: #ffffff;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 4px;
            }
            .feature-desc {
                font-size: 14px;
                color: #9ca3af;
                margin: 0;
            }
            .footer {
                padding: 30px 40px;
                background-color: #090d16;
                border-t: 1px solid rgba(255, 255, 255, 0.03);
                text-align: center;
            }
            .footer-text {
                font-size: 12px;
                color: #4b5563;
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="header">
                    <a href="https://www.launchos.co.in" class="logo">launch<span>OS</span></a>
                </div>
                <div class="content">
                    <h1>From raw idea to <span class="highlight">validation</span>.</h1>
                    <p>Welcome, ${name}! You've just stepped into the AI-powered operating system built explicitly for ambitious founders.</p>
                    <p>Stop wasting weeks guessing or building in the dark. With launchOS, you can analyze any startup concept, map its target niche, outline its MVP, and draft custom outreach copy in under 60 seconds.</p>
                    
                    <div class="features-grid">
                        <div class="feature-item">
                            <div class="feature-title">🎯 Niche Finder</div>
                            <p class="feature-desc">Locate high-intent online communities, subreddits, and target niches instantly.</p>
                        </div>
                        <div class="feature-item">
                            <div class="feature-title">⚡ MVP blueprints</div>
                            <p class="feature-desc">Get customized technology stacks and lean feature plans to launch in 14 days.</p>
                        </div>
                        <div class="feature-item">
                            <div class="feature-title">💰 Pricing Architect</div>
                            <p class="feature-desc">Receive precise tiering suggestions, setup fees, and conversion benchmarks.</p>
                        </div>
                    </div>

                    <div class="cta-container">
                        <a href="https://www.launchos.co.in/dashboard" class="cta-button">Validate Your First Idea</a>
                    </div>
                </div>
                <div class="footer">
                    <p class="footer-text">© ${new Date().getFullYear()} launchOS. Built for Indian founders.<br>If you have questions, reply to this email directly.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}

/**
 * Returns the HTML for a beautiful, premium startup analysis report email.
 */
function getAnalysisEmailHtml(name: string, idea: string, analysisId: string, niche: string, score: number, verdict: string): string {
    const verdictColor = verdict.toLowerCase() === 'go' ? '#10b981' : '#f59e0b';
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Your Startup Validation Report</title>
        <style>
            body {
                background-color: #030712;
                color: #f3f4f6;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
            }
            .wrapper {
                background-color: #030712;
                padding: 40px 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #0d121f;
                border: 1px solid rgba(59, 130, 246, 0.15);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            }
            .header {
                padding: 40px 40px 20px 40px;
                text-align: center;
            }
            .logo {
                font-size: 24px;
                font-weight: 800;
                letter-spacing: -0.05em;
                color: #ffffff;
                text-decoration: none;
            }
            .logo span {
                color: #3b82f6;
            }
            .content {
                padding: 0 40px 40px 40px;
            }
            h1 {
                font-size: 24px;
                font-weight: 800;
                color: #ffffff;
                margin-top: 0;
                margin-bottom: 20px;
                line-height: 1.2;
                letter-spacing: -0.02em;
            }
            p {
                font-size: 15px;
                line-height: 1.6;
                color: #9ca3af;
                margin-top: 0;
                margin-bottom: 24px;
            }
            .idea-box {
                background: rgba(255, 255, 255, 0.02);
                border-left: 3px solid #3b82f6;
                padding: 16px 20px;
                border-radius: 0 12px 12px 0;
                margin-bottom: 24px;
                font-style: italic;
                color: #e5e7eb;
            }
            .stats-card {
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                padding: 24px;
                margin-bottom: 32px;
                display: table;
                width: 100%;
                box-sizing: border-box;
            }
            .stat-col {
                display: table-cell;
                width: 33.333%;
                text-align: center;
                vertical-align: middle;
            }
            .stat-val {
                font-size: 28px;
                font-weight: 800;
                color: #ffffff;
                line-height: 1;
                margin-bottom: 4px;
            }
            .stat-lbl {
                font-size: 11px;
                font-weight: 700;
                color: #4b5563;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .cta-container {
                text-align: center;
                margin-bottom: 32px;
                margin-top: 32px;
            }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #c4c7c9 0%, #444749 100%);
                color: #000000 !important;
                text-decoration: none;
                font-size: 15px;
                font-weight: 700;
                padding: 16px 36px;
                border-radius: 8px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
            }
            .footer {
                padding: 30px 40px;
                background-color: #090d16;
                text-align: center;
            }
            .footer-text {
                font-size: 12px;
                color: #4b5563;
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="header">
                    <a href="https://www.launchos.co.in" class="logo">launch<span>OS</span></a>
                </div>
                <div class="content">
                    <h1>Your Validation Report is Ready</h1>
                    <p>Hi ${name || 'Founder'}, our AI engines have successfully parsed and processed your startup idea:</p>
                    
                    <div class="idea-box">
                        "${idea}"
                    </div>

                    <div class="stats-card">
                        <div class="stat-col">
                            <div class="stat-val" style="color: ${verdictColor}">${verdict}</div>
                            <div class="stat-lbl">Verdict</div>
                        </div>
                        <div class="stat-col" style="border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05);">
                            <div class="stat-val">${score}/100</div>
                            <div class="stat-lbl">Score</div>
                        </div>
                        <div class="stat-col">
                            <div class="stat-val" style="font-size: 16px; color: #3b82f6; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 0 4px;">${niche}</div>
                            <div class="stat-lbl">Primary Niche</div>
                        </div>
                    </div>

                    <p>We've created a custom, comprehensive dashboard highlighting your MVP architecture, pricing tables, community distribution lists, YC match scores, and direct-response cold outreach sequences.</p>

                    <div class="cta-container">
                        <a href="https://www.launchos.co.in/dashboard/analysis/${analysisId}" class="cta-button">View Detailed Analysis Dashboard</a>
                    </div>
                </div>
                <div class="footer">
                    <p class="footer-text">© ${new Date().getFullYear()} launchOS. All rights reserved.<br>If you need assistance, reply to this email.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}

/**
 * Sends a welcome email to a new user.
 */
export async function sendWelcomeEmail(toEmail: string, name: string): Promise<boolean> {
    try {
        const resend = getResend()
        const html = getWelcomeEmailHtml(name)
        
        await resend.emails.send({
            from: 'launchOS <onboarding@resend.dev>', // Can be replaced by custom domain sender once verified
            to: toEmail,
            subject: `Welcome to launchOS, ${name}! 🚀`,
            html: html,
        })
        console.log(`[Resend] Welcome email sent successfully to ${toEmail}`)
        return true
    } catch (error) {
        console.error('[Resend ERROR] Failed to send welcome email:', error)
        return false
    }
}

/**
 * Sends a startup validation report summary email.
 */
export async function sendAnalysisEmail(
    toEmail: string, 
    name: string, 
    idea: string, 
    analysisId: string, 
    niche: string, 
    score: number, 
    verdict: string
): Promise<boolean> {
    try {
        const resend = getResend()
        const html = getAnalysisEmailHtml(name, idea, analysisId, niche, score, verdict)
        
        await resend.emails.send({
            from: 'launchOS <reports@resend.dev>', // Can be replaced by custom domain sender once verified
            to: toEmail,
            subject: `Your launchOS Startup Validation Report: ${niche} 🎯`,
            html: html,
        })
        console.log(`[Resend] Analysis report email sent successfully to ${toEmail}`)
        return true
    } catch (error) {
        console.error('[Resend ERROR] Failed to send analysis report email:', error)
        return false
    }
}
