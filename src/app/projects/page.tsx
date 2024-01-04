import {client} from "@/lib/sanity"
import React from "react"
import ProjectCard from "@/app/projects/ProjectCard"
import {Metadata} from "next";
import {HeadingOneH1} from "@/components/ui/Typography/headings/heading-one"
import {Text} from "@/components/ui/Typography/Text";

export default async function Projects() {
    const projectOverviewData: ProjectOverviewData[] = await getProjectOverviews()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between my-4 p-12">
            <section className="py-12 flex flex-col items-center text-center">
                <HeadingOneH1 color="primary">
                    Projects Page
                </HeadingOneH1>
                <Text className="text-muted-foreground" variant="large">
                    Pulvinar maximus sodales facilisi pellentesque fringilla potenti efficitur sem libero dictumst eget
                </Text>
            </section>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
                {projectOverviewData.map((project) => (
                    <ProjectCard key={`project-card-${project._id}`} project={project} />
                ))}
            </div>
        </main>
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

// GetProjectOverviews only grabs the overview for the cards and their slugs
export async function getProjectOverviews() {
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
    return await client.fetch(projectOverviewQuery)
}

export const metadata: Metadata = {
    title: 'Projects | Jesus Perez - Full Stack Web and Mobile Developer',
    description:
        'Explore the portfolio of Jesus Perez, a skilled Web and Mobile Developer specializing in React, Vue, JavaScript, and React Native. Jesus delivers exceptional full-stack applications using modern technology stacks. Hire him for your next project!',
}