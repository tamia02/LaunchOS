import * as React from "react"
import { cn } from "@/lib/utils"

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string
    value: string | number
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
    ({ className, label, value, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-sm bg-tertiary p-4 border border-white/5",
                    className
                )}
                {...props}
            >
                <p className="text-[11px] uppercase tracking-wider text-text-secondary mb-1">
                    {label}
                </p>
                <p className="text-2xl font-mono text-foreground font-bold">
                    {value}
                </p>
            </div>
        )
    }
)
MetricCard.displayName = "MetricCard"

export { MetricCard }
