import React from "react"
import Skeleton from "@/components/Skeleton/Skeleton"
import {Text} from "@/components/ui/Typography/Text"
import ProjectCardLoading from "@/app/projects/ProjectCardLoading"

export default function ProjectLoading() {
    return (
        <div className="grid grid-cols-2 gap-8 mt-24">
            <section className="flex flex-col items-right text-left col-span-2">
                <Skeleton height="2rem"/>

                <Text className="text-muted-foreground my-2 lg:w-[95%]" variant="large">
                    <div>
                        <Skeleton count={4}/>
                    </div>
                </Text>
            </section>

            <div className="grid grid-cols-3">
                <ProjectCardLoading />
            </div>
        </div>
    )
}