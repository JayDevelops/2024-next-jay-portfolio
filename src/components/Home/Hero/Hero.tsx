import dynamic from "next/dynamic"
import React from "react"
import HeroHeader from "@/components/Home/Hero/HeroHeader"

export default function Hero() {
    const DynamicComputerModel: React.ComponentType<{}> = dynamic(() => import("@/components/Models/Computer/Computer"), {loading: () => <p>Loading...</p>, ssr: false})

    return (
        <div className="jay-hero-section mx-auto w-full h-full max-w-5xl px-6 pb-8 flex flex-col md:flex-row md:items-center justify-between md:h-screen md:max-h-[950px] md:max-w-7xl">
            <HeroHeader />

            <div className="md:w-[700px] md:h-[240px] h-[180px] w-[500px] md:relative">
                <DynamicComputerModel />
            </div>
        </div>
    )
}