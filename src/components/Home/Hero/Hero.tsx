import dynamic from "next/dynamic"
import React from "react"
import HeroHeader from "@/components/Home/Hero/HeroHeader"
import CanvasLoader from "@/components/Models/CanvasLoader";

export default function Hero() {
    const DynamicComputerModel: React.ComponentType<{}> = dynamic(() => import(
        "@/components/Models/Computer/Computer"),
        {
            loading: () => {
                return (
                    <div className="md:w-[700px] md:h-[240px] h-[180px] w-[500px] md:relative">
                        <CanvasLoader height="10rem" />
                    </div>
                )
            },
            ssr: false,
        }
    )

    return (
        <div className="jay-hero-section mx-auto w-full h-full max-w-5xl px-6 pb-8 flex flex-col md:flex-row md:items-center justify-between md:h-screen md:max-h-[950px] md:max-w-7xl">
            <div className="w-full md:w-2/5 pr-18 md:pr-16 text-left order-2 md:order-1">
                <HeroHeader />
            </div>

            <div className="md:w-[700px] md:h-[240px] h-[180px] w-[500px] md:relative">
                <DynamicComputerModel />
            </div>
        </div>
    )
}