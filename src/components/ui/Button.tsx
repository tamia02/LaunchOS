import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: "bg-accent text-accent-foreground font-mono font-bold hover:opacity-90 active:scale-[0.98]",
            secondary: "bg-transparent border border-white/15 text-foreground hover:bg-white/5",
            ghost: "bg-transparent text-text-secondary hover:text-foreground hover:bg-white/5",
        }

        const sizes = {
            sm: "px-4 py-2 text-xs rounded-lg",
            md: "px-6 py-3.5 text-[13px] rounded-md",
            lg: "px-8 py-4 text-sm rounded-md",
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
