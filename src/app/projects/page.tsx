import {client} from "@/lib/sanity"
import React from "react"
import ProjectCard from "@/app/projects/ProjectCard"
import {Metadata} from "next"
import ProjectHeader from "@/app/projects/ProjectHeader";

export default async function Projects() {
    const projectOverviewQuery = `*[_type == "project"] | order(year desc) {
  title,
    year,
    overview,
    _id,
    link,
    github_link,
    tags,
    "thumbnailURL": thumbnail.asset->url,
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
    title: 'Projects',
    description:
        'Meet Jesus Perez Arias, a seasoned Full-Stack Software Engineer based in Montebello, California; ' +
        'With over four years of hands-on experience and a bachelor\'s degree in computer science from California State University, Los Angeles, ' +
        'I specialize in crafting dynamic web applications using cutting-edge technologies such as Next.js, ReactJS, PHP, and WordPress. ' +
        'My proficiency extends to working with advanced tools and databases, including Prisma, React Query, MySQL, and MongoDB. ' +
        'Driven by a passion for innovation, I focus on utilizing Next.js in conjunction with ReactJS to develop aesthetically pleasing and highly functional web solutions. ' +
        'Beyond web development, my skill set encompasses mobile application development using React Native and Swift, enabling the creation of exceptional and user-friendly mobile applications. ' +
        'Currently seeking new opportunities for professional growth, I am available for freelance work, eager to contribute my expertise to various projects. ' +
        'With a commitment to delivering outstanding results, I look forward to collaborating on innovative projects and further enhancing skills in full-stack development- hire me for any software engineer opportunities.',
}