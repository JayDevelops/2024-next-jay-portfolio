import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import Skeleton from "@/components/Skeleton/Skeleton"
import React from "react"

export default function ProjectCardLoading() {
    const dummyCards: number[] = [1, 2, 3]

    return (
        <article className="flex items-stretch">
            {dummyCards.map((card, index) => (
                <Card key={index} className="mx-4">
                    <CardHeader>
                        <div className="h-48 w-[400px] my-2">
                            <Skeleton height="12rem"/>
                        </div>
                        <CardTitle className="text-2xl my-2">
                            <Skeleton height="2rem"/>
                        </CardTitle>

                        <CardDescription className="my-2">
                            <Skeleton height="6rem"/>
                        </CardDescription>

                    </CardHeader>
                    <CardContent>
                        <Skeleton height="2rem"/>
                    </CardContent>

                    <CardFooter className="flex flex-row gap-4">
                        <div className="w-1/5">
                            <Skeleton height="2rem"/>
                        </div>

                        <div className="w-1/5">
                            <Skeleton height="2rem"/>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </article>
    )
}