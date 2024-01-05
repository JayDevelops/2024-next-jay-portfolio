import React from "react"
import Skeleton from "@/components/Skeleton/Skeleton"

export default function HomeLoading() {
    return (
        <div
            className="jay-hero-section mx-auto w-full h-full max-w-5xl px-6 pb-8 flex flex-col md:flex-row md:items-center justify-between md:h-screen md:max-h-[950px] md:max-w-7xl">

            <div className="md:w-2/5 md:pr-16 text-left order-2 md:order-1">
                <Skeleton height="13rem"/>
                <br/>

                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <Skeleton height="2rem" />
                    </div>

                    <div className="col-span-2">
                        <Skeleton height="2rem" />
                    </div>
                </div>
            </div>

            <div className="md:w-[700px] md:h-[240px] h-[180px] w-[500px] md:relative">
                <Skeleton height="15rem"/>
            </div>
        </div>
    )
}