import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-14 w-full rounded-2xl bg-surface-container-low px-6 py-3 text-base text-on-surface ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-on-surface-variant/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tertiary/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-body glass-edge border border-white/5 shadow-inner italic tracking-tight antialiased",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
