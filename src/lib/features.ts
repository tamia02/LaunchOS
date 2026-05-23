export type PlanType = 'free' | 'basic' | 'medium' | 'advanced';

export const PLAN_FEATURES: Record<PlanType, Record<string, boolean>> = {
    free: {
        niche_engine: true,
        validation_engine: true,
        mvp_engine: false,
        pricing_engine: false,
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
        niche_engine: true,
        validation_engine: true,
        mvp_engine: true,
        pricing_engine: true,
        outreach_engine: false,
        competitor_engine: false,
        investor_engine: false,
        yc_engine: false,
        pivot_engine: false,
        progress_engine: true,
        export_pdf: false,
        pricing_chatbot: false
    },
    medium: {
        niche_engine: true,
        validation_engine: true,
        mvp_engine: true,
        pricing_engine: true,
        outreach_engine: true,
        competitor_engine: true,
        investor_engine: false,
        yc_engine: false,
        pivot_engine: false,
        progress_engine: true,
        export_pdf: false,
        pricing_chatbot: false
    },
    advanced: { // premium
        niche_engine: true,
        validation_engine: true,
        mvp_engine: true,
        pricing_engine: true,
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

