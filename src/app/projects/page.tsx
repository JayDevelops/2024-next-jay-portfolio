import {client} from "@/lib/sanity"
import React from "react"
import ProjectCard from "@/app/projects/ProjectCard"
import {Metadata} from "next"
import ProjectHeader from "@/app/projects/ProjectHeader";

export default async function Projects() {
    const projectOverviewQuery = `*[_type=="project"] {
    title,
    overview,
    _id,
    slug,
    year,
    link,
    github_link,
    "thumbnailURL": thumbnail.asset->url,
    tags,
    }
    `
    const projectOverviewData: ProjectOverviewData[] =  await client.fetch(projectOverviewQuery)

    return (
        <div className="my-20 grid grid-cols-2 gap-8">
            <section className="flex flex-col items-right text-left col-span-2">
                <ProjectHeader />
            </section>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 col-span-2">
                {projectOverviewData.map((project) => (
                    <ProjectCard key={`project-card-${project._id}`} project={project} />
                ))}
            </div>
        </div>
    )
}

//  Interface for ProjectOverviews
export interface ProjectOverviewData {
    title: string,
    overview: string,
    slug: string,
    _id: string,
    thumbnailURL: string,
    year: string,
    link: string,
    github_link?: string,
    tags: string[],
}

export const metadata: Metadata = {
    title: 'Projects | Jesus Perez - Full Stack Web and Mobile Developer',
    description:
        'Explore the portfolio of Jesus Perez, a skilled Web and Mobile Developer specializing in React, Vue, JavaScript, and React Native. Jesus delivers exceptional full-stack applications using modern technology stacks. Hire him for your next project!',
}