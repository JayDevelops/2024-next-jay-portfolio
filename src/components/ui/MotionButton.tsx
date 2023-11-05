"use client"
import Link from "next/link"
import {buttonVariants} from "@/components/ui/button"
import {motion} from "framer-motion"
import React from "react"

type MotionButtonProps = {
    buttonVariant: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined,
    buttonText: string,
    icon: any,
}
export default function MotionButton({buttonVariant, buttonText, icon: Icon}: MotionButtonProps) {
    const floatFromRight = {
        hidden: {
            x: "100%",
            opacity: 0,
            scale: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
    }

    return(
        <>
            <motion.div
                variants={floatFromRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.2}}
                whileTap={{
                    scale: 0.8,
                }}
            >
                <Link href={`/projects`} className={
                    buttonVariants({
                        variant: buttonVariant,
                    })
                }>
                    <Icon className="mr-2 h-4 w-4" /><span className="font-bold capitalize">{buttonText}</span>
                </Link>
            </motion.div>
        </>
    )
}
