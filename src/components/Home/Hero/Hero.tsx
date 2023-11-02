import {Button} from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import React from "react"
import Balancer from "react-wrap-balancer";

export default function Hero() {
    const DynamicComputerModel: React.ComponentType<{}> = dynamic(() => import("@/components/Models/Computer/Computer"), {loading: () => <p>Loading...</p>,})

    return (
        <div className="jay-hero-section mx-auto w-full h-full max-w-5xl px-6 pb-8 flex flex-col md:flex-row md:items-center justify-between md:h-screen md:max-h-[950px] md:max-w-7xl">
            {/* Left content */}
            <div className="md:w-2/5 md:pr-16 text-left order-2 md:order-1">
                <div className="md:relative md:w-full md:h-full flex flex-col items-center md:items-start sm:my-2">
                    <h1 className="text-center text-secondary-foreground md:text-left text-4xl md:text-5xl md:leading-[3rem] leading-[2rem] tracking-tight">
                        <span> I&#39;m </span>
                        <span className="text-primary">Jesus Perez</span>
                    </h1>
                    <p className="text-secondary-foreground mb-8 mt-4 max-w-[30rem] text-center md:text-left leading-6 text-base md:text-[1.125rem] md:leading-[1.5]">
                        Based in Los Angeles, CA with over three years experience in MERN stack and Next.js, crafting stunning dynamic full-stack web applications, and mobile app development.
                        I specialize in software solutions, contact me for your business needs; available for full-time & freelance work.
                    </p>
                    <div className="flex justify-center md:justify-start items-center md:text-center gap-4">
                        <Link href={`/contact`}>
                            <Button className="text-left">Contact Me</Button>
                        </Link>
                        <Link href={`/projects`}>
                            <Button variant="secondary" className="text-left">
                                All My Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right content - Computer model */}
            <div className="md:w-[700px] md:h-[240px] h-[180px] w-[500px] md:relative">
                <DynamicComputerModel />
            </div>
        </div>
    )
}