import * as React from "react"
import { cn } from "@/lib/utils"

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'accent'
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: "bg-[#1A1A1A] border-white/10 text-[#CCCCCC]",
            accent: "bg-accent/10 border-accent/30 text-accent",
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors font-sans",
                    variants[variant],
                    className
                )}
                {...props}
            />
        )
    }
)
Tag.displayName = "Tag"

export { Tag }
