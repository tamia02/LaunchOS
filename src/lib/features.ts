export type PlanType = 'free' | 'basic' | 'medium' | 'advanced';

export const PLAN_FEATURES: Record<PlanType, Record<string, boolean>> = {
    free: {
        niche_search_intent: false,
        niche_action_24h: false,
        validation_all_signals: false,
        mvp_path_to_first_dollar: false,
        pricing_mistakes: false,
        pricing_anchor: false,
        outreach_engine: false,
        competitor_engine: false,
        investor_engine: false,
        yc_engine: false,
        pivot_engine: false,
        progress_engine: false,
        export_pdf: false,
        pricing_chatbot: false
    },
    basic: {
        niche_search_intent: false,
        niche_action_24h: false,
        validation_all_signals: false,
        mvp_path_to_first_dollar: false,
        pricing_mistakes: false,
        pricing_anchor: false,
        outreach_engine: false,
        competitor_engine: false,
        investor_engine: false,
        yc_engine: false,
        pivot_engine: false,
        progress_engine: false,
        export_pdf: false,
        pricing_chatbot: false
    },
    medium: {
        niche_search_intent: true,
        niche_action_24h: true,
        validation_all_signals: true,
        mvp_path_to_first_dollar: true,
        pricing_mistakes: true,
        pricing_anchor: true,
        outreach_engine: false,
        competitor_engine: true,
        investor_engine: true,
        yc_engine: true,
        pivot_engine: false,
        progress_engine: false,
        export_pdf: false,
        pricing_chatbot: false
    },
    advanced: {
        niche_search_intent: true,
        niche_action_24h: true,
        validation_all_signals: true,
        mvp_path_to_first_dollar: true,
        pricing_mistakes: true,
        pricing_anchor: true,
        outreach_engine: true,
        competitor_engine: true,
        investor_engine: true,
        yc_engine: true,
        pivot_engine: true,
        progress_engine: true,
        export_pdf: true,
        pricing_chatbot: true
    }
};

export function canAccessFeature(plan: string | null | undefined, featureKey: string): boolean {
    const safePlan = (plan || 'free') as PlanType;
    return PLAN_FEATURES[safePlan]?.[featureKey] ?? false;
}
