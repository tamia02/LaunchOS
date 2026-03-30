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
            primary: "button-metallic text-on-primary font-headline font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:brightness-110 active:scale-[0.98] border border-white/10",
            secondary: "bg-surface-container-high text-on-surface font-headline font-black border border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 hover:-translate-y-0.5 shadow-xl",
            ghost: "bg-transparent text-on-surface-variant font-headline font-bold hover:text-on-surface hover:bg-white/5",
        }

        const sizes = {
            sm: "px-4 py-2 text-[10px] uppercase tracking-[0.2em] rounded-lg",
            md: "px-7 py-4 text-[12px] uppercase tracking-[0.2em] rounded-xl",
            lg: "px-10 py-5 text-[14px] uppercase tracking-[0.3em] rounded-2xl",
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
