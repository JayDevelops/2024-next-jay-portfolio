import { PropsWithChildren } from "react"

export type HeadingVariantProps = PropsWithChildren<{
    color?:
        | "primary"
        | "muted"
        | "muted-foreground"
        | "secondary"
        | "secondary-foreground"
        | "primary-foreground"
        | "accent"
        | "accent-foreground";
    classNames?: string;
}>

// Map color variant to corresponding Tailwind CSS class
export const colorClass = {
    primary: "text-primary",
    muted: "text-muted",
    "muted-foreground": "text-muted-foreground",
    secondary: "text-secondary",
    "secondary-foreground": "text-secondary-foreground",
    "primary-foreground": "text-primary-foreground",
    accent: "text-accent",
    "accent-foreground": "text-accent-foreground",
}

export function HeadingOne({ children, color = "primary", classNames = "" }: HeadingVariantProps) {
    // If the passed children react node is falsy (empty), then return nothing
    if (!children) return null;

    const colorClassValue = colorClass[color];

    return (
        <h1
            className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl ${colorClassValue} ${classNames}`}
        >
            {children}
        </h1>
    );
}

export function HeadingTwo({ children, color = "primary", classNames = "" }: HeadingVariantProps) {
    // If the passed children react node is falsy (empty), then return nothing
    if (!children) return null;

    const colorClassValue = colorClass[color];

    return (
        <h2
            className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${colorClassValue} ${classNames}`}
        >
            {children}
        </h2>
    )
}

export function HeadingThree({ children, color = "primary", classNames = "" }: HeadingVariantProps) {
    // If the passed children react node is falsy (empty), then return nothing
    if (!children) return null;

    const colorClassValue = colorClass[color]

    return (
        <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${colorClassValue} ${classNames}`}>
            {children}
        </h3>
    )
}

export function HeadingFour({ children, color = "primary", classNames = "" }: HeadingVariantProps) {
    // If the passed children react node is falsy (empty), then return nothing
    if (!children) return null;

    const colorClassValue = colorClass[color]

    return (
        <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${colorClassValue} ${classNames}`}>
            People stopped telling jokes
        </h4>
    )
}

