import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number // 0 to 100
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
    ({ className, value, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "h-2 w-full overflow-hidden rounded-full bg-tertiary",
                className
            )}
            {...props}
        >
            <div
                className="h-full bg-accent transition-all duration-500 ease-in-out"
                style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
            />
        </div>
    )
)
ProgressBar.displayName = "ProgressBar"

export { ProgressBar }
