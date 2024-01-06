"use client"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

interface CanvasLoaderProps {
    width?: number | string,
    height?: number | string,
}

export default function CanvasLoader({height, width}: CanvasLoaderProps){

    return (
        <SkeletonTheme baseColor="hsl(var(--foreground))" highlightColor="hsl(var(--primary))">
            <Skeleton height={height} width={width} />
        </SkeletonTheme>
    )
}