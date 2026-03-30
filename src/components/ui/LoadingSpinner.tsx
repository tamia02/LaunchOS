import * as React from "react"
import { cn } from "@/lib/utils"

const LoadingSpinner = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent",
            className
        )}
        {...props}
    />
))
LoadingSpinner.displayName = "LoadingSpinner"

export { LoadingSpinner }
