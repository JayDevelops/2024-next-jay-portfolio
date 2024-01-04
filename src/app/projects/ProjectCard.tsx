"use client"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import React from "react"
import {Tilt} from "react-tilt"
import {GitHubLogoIcon, Link2Icon} from "@radix-ui/react-icons"
import {ProjectOverviewData} from "@/app/projects/page"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"

export default function ProjectCard({ project }: { project: ProjectOverviewData }) {
    //  Pass the tags to the ProjectTags component
    const {tags} = project

    return (
        <Tilt
            options={{
                max: 15,
                scale: 1,
                speed: 180,
                axis: "x",
            }}
            className="flex items-stretch"
        >
            <article key={project._id} className="flex items-stretch">
                <Card>
                    <CardHeader>
                        <div className="h-56 w-full relative">
                            <Image
                                src={project.thumbnailURL}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardTitle className="text-2xl">
                            {project.title}
                        </CardTitle>
                        <CardDescription>{project.overview}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ProjectTags tags={tags}/>
                    </CardContent>
                    <CardFooter className="flex flex-row gap-3">
                        <Button asChild variant="default">
                            <Link href={project.link} target="_blank">View Live <span> &nbsp; </span> <Link2Icon/> </Link>
                        </Button>

                        {project.github_link && (
                            <Button asChild variant="secondary">
                                <Link href={project.github_link} target="_blank"> Project Repo <span> &nbsp; </span> <GitHubLogoIcon/> </Link>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </article>
        </Tilt>
    )
}

const ProjectTags = ({ tags }: { tags: string[] }) => {
    const tagStyles: Record<string, string> = {
        javascript: "text-yellow-500",
        vuejs: "text-green-500",
        reactjs: "text-blue-500",
        nextjs: "text-blue-500",
        sass: "text-pink-400",
        css: "text-blue-500",
        tailwindcss: "text-blue-500",
        sanity: "text-amber-500",
        mongodb: "text-emerald-400 dark:text-emerald-600",
        php: "text-slate-600 dark:text-slate-300",
        swift: "text-orange-500",
        reactNative: "text-indigo-500",
        wordpress: "text-muted-foreground",
    }

    return tags.map((tag, index) => (
        <span
            key={index}
            className={`inline-block px-2 mr-2 text-base md:text-sm ${tagStyles[tag.toLowerCase()]}`}
        >
            #{tag}
        </span>
    ))
}