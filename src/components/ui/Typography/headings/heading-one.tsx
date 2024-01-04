import { PropsWithChildren } from "react";

type HeadingOneH1Props = PropsWithChildren<{
    color?:
        | "primary"
        | "muted"
        | "muted-foreground"
        | "secondary"
        | "secondary-foreground"
        | "primary-foreground"
        | "accent"
        | "accent-foreground"
    classNames?: string
}>

export function HeadingOne({children, color = "primary", classNames = "", }: HeadingOneH1Props) {
    // If the passed children react node is falsy (empty), then return nothing
    if (!children) return null;

    // Map color variant to corresponding Tailwind CSS class
    const colorClass = {
        primary: "text-primary",
        muted: "text-muted",
        "muted-foreground": "text-muted-foreground",
        secondary: "text-secondary",
        "secondary-foreground": "text-secondary-foreground",
        "primary-foreground": "text-primary-foreground",
        accent: "text-accent",
        "accent-foreground": "text-accent-foreground",
    }[color];

    return (
        <h1
            className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl ${colorClass} ${classNames}`}
        >
            {children}
        </h1>
    )
}