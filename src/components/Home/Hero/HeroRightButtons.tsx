"use client"
import React from "react"
import dynamic from "next/dynamic"
import MotionButton from "@/components/ui/MotionButton"
import {BackpackIcon, EnvelopeOpenIcon} from "@radix-ui/react-icons";

export default function HeroRightButtons() {
    return (
        <div className="flex justify-center md:justify-start items-center md:text-center gap-5 text-base">

            <MotionButton buttonVariant={'default'} buttonText={'Contact Me'} icon={EnvelopeOpenIcon} />

            <MotionButton buttonVariant={'secondary'} buttonText={'My works'} icon={BackpackIcon} />
        </div>
    )
}