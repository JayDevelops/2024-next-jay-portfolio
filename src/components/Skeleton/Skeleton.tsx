import React, {PropsWithChildren} from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CustomSkeletonProps {
    count?: number,
    wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>,
    circle?: boolean,
    className?: string,
    containerClassName?: string,
    containerTestId?: string,
    style?: React.CSSProperties,
    height?: string | number,
    width?: string | number,
}
export default function CustomSkeleton({ count, wrapper, circle, className, containerClassName, containerTestId, style, height, width }: CustomSkeletonProps) {
    return (
        <SkeletonTheme baseColor="hsl(var(--foreground))" highlightColor="hsl(var(--primary))">
            <Skeleton
                count={count}
                wrapper={wrapper}
                circle={circle}
                className={className}
                containerClassName={containerClassName}
                containerTestId={containerTestId}
                style={style}
                height={height}
                width={width}
            />
        </SkeletonTheme>
    );
}