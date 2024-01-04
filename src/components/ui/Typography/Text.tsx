import { PropsWithChildren } from "react";
import classNames from "classnames";

type TextProps = PropsWithChildren<{
    variant?: "small" | "normal" | "large";
    className?: string;
}>

export function Text({ children, variant = "normal", className }: TextProps) {
    const textSizeClasses = {
        small: "text-sm",
        normal: "text-base",
        large: "text-lg",
    }

    return (
        <p
            className={classNames(
                "leading-7",
                textSizeClasses[variant],
                { "&:not(:first-child)": "mt-6" },
                className // Include custom className
            )}
        >
            {children}
        </p>
    )
}


export function BlockQuote({ children, variant = "normal", className }: TextProps) {
    const textSizeClasses = {
        small: "text-sm",
        normal: "text-base",
        large: "text-lg",
    }

    return (
        <blockquote
            className={classNames("mt-6 border-l-2 pl-6 italic", textSizeClasses[variant], className)}
        >
            {children}
        </blockquote>
    )
}
