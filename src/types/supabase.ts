export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            users: {
                Row: {
                    id: string
                    email: string
                    full_name: string | null
                    plan_type: string
                    usage_count: number
                    usage_reset_date: string | null
                    stripe_customer_id: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    email: string
                    full_name?: string | null
                    plan_type?: string
                    usage_count?: number
                    usage_reset_date?: string | null
                    stripe_customer_id?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    email?: string
                    full_name?: string | null
                    plan_type?: string
                    usage_count?: number
                    usage_reset_date?: string | null
                    stripe_customer_id?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            analyses: {
                Row: {
                    id: string
                    user_id: string | null
                    idea: string
                    engine1_niche: Json | null
                    engine2_validation: Json | null
                    engine3_mvp: Json | null
                    engine4_pricing: Json | null
                    engine5_outreach: Json | null
                    engine6_competitor: Json | null
                    engine7_investor: Json | null
                    engine8_yc: Json | null
                    engine9_pivot: Json | null
                    engine10_revenue: Json | null
                    is_public: boolean
                    upvotes: number
                    created_at: string
                }
                // ... (truncated for space, will expand as needed)
            }
        }
    }
}
