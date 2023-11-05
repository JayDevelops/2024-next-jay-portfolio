"use client"
import React from "react"
import dynamic from "next/dynamic"
import MotionButton from "@/components/ui/MotionButton"

export default function HeroRightButtons() {
    const DynamicBackPackIcon = dynamic(() =>  import('@radix-ui/react-icons').then((mod) => mod.BackpackIcon), {

        loading: () => <p>Loading...</p>
    })
    const DynamicEnvelopeOpenIcon = dynamic(() => import('@radix-ui/react-icons').then((mod) => mod.EnvelopeOpenIcon), {
        loading: () => <p>Loading...</p>
    })

    return (
        <div className="flex justify-center md:justify-start items-center md:text-center gap-5 text-base">

            <MotionButton buttonVariant={'default'} buttonText={'Contact Me'} icon={DynamicEnvelopeOpenIcon} />

            <MotionButton buttonVariant={'secondary'} buttonText={'All my projects'} icon={DynamicBackPackIcon} />
        </div>
    )
}