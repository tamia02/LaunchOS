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
            primary: "bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold shadow-xl shadow-black/20 hover:brightness-110 active:scale-[0.98]",
            secondary: "bg-surface-container-high text-on-surface font-headline font-bold border border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 hover:-translate-y-0.5 shadow-lg",
            ghost: "bg-transparent text-on-surface-variant font-headline hover:text-on-surface hover:bg-white/5",
        }

        const sizes = {
            sm: "px-4 py-2 text-[11px] uppercase tracking-widest rounded-lg",
            md: "px-6 py-3.5 text-[13px] uppercase tracking-widest rounded-md",
            lg: "px-8 py-4 text-[14px] uppercase tracking-[0.2em] rounded-md",
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center transition-all duration-300 custom-ease focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary disabled:pointer-events-none disabled:opacity-50",
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
