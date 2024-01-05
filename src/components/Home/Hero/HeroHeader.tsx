import {HeadingOne} from "@/components/ui/Typography/Headers"
import {Text} from "@/components/ui/Typography/Text"
import HeroRightButtons from "@/components/Home/Hero/HeroRightButtons"
import React from "react"

export default function HeroHeader() {
    return (
        <div className="md:w-2/5 md:pr-16 text-left order-2 md:order-1">
            <div className="md:relative md:w-full md:h-full flex flex-col items-center md:items-start sm:my-2">
                <HeadingOne color="secondary-foreground">
                    <span> I&#39;m </span>
                    <span className="text-primary">Jesus Perez</span>
                </HeadingOne>
                <Text className="text-secondary-foreground mb-4 mt-2 max-w-[30rem] text-center md:text-left ">
                    Based in Los Angeles, CA with over three years experience in MERN stack and Next.js, crafting
                    stunning dynamic full-stack web applications, and mobile app development.
                    I specialize in software solutions, contact me for your business needs; available for full-time &
                    freelance work.
                </Text>

                <HeroRightButtons/>
            </div>
        </div>
    )
}