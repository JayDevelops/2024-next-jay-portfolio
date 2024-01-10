import ExperienceTimeline from "@/app/about/ExperienceTimeline"
import {HeadingThree} from "@/components/ui/Typography/Headers"
import AboutMeHeaders from "@/app/about/AboutMeHeaders"
import DownloadResume from "@/app/about/DownloadResume"
import {client} from "@/lib/sanity"
import SkillColumns from "@/app/projects/SkillColumns"
import {Metadata} from "next";

export default async function Projects() {
    const skillQuery = `*[_type=="skill"] {
            title,
            _id,
            date,
            "imageURL": image.asset->url,
        }`

    const skills: Skill[] = await client.fetch(skillQuery)

    return (
        <div className="my-24">
            <section className="grid-cols-2 gap-5 mb-12">
                <AboutMeHeaders />
                <br />
                <DownloadResume />
            </section>

            <section className="flex flex-col col-span-2 gap-8">
                <div className="col-span-2">
                    <HeadingThree className="text-center mb-4">
                        My Experiences
                    </HeadingThree>
                    <ExperienceTimeline/>
                </div>

                <div className="col-span-2">
                    <HeadingThree className="text-center mb-4">
                        My Skills
                    </HeadingThree>

                </div>
            </section>

            <section className="my-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-full bg-primary p-3 md:p-5 rounded-lg">
                    <SkillColumns skills={skills} />
                </div>
            </section>
        </div>
    )
}
export const metadata: Metadata = {
    title: 'About',
    description:
        'About Jesus Perez: Holding a bachelor\'s degree in computer science from California State University, Los Angeles with over four-plus years of hands-on experience.' +
        'Jesus has successfully delivered robust and scalable solutions across diverse projects. Encompassing a passion for mobile application development using React Native and Swift, ' +
        'and full stack web development with Next.js and other modern tech features this is what a professional seasoned developer will bring to the table.' +
        'Explore the journey of a seasoned Full-Stack Software Engineer, dive into the world of technology with Jesus Perez Arias.',
}
interface Skill {
    _id: string,
    title: string,
    style: string,
    learnedAt: string,
    imageURL: string,
}


export type {Skill}