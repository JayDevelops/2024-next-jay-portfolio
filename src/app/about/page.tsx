import ExperienceTimeline from "@/app/about/ExperienceTimeline"
import {HeadingThree} from "@/components/ui/Typography/Headers"
import AboutMeHeaders from "@/app/about/AboutMeHeaders"
import DownloadResume from "@/app/about/DownloadResume"
import {client} from "@/lib/sanity"
import SkillColumns from "@/app/projects/SkillColumns"

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

interface Skill {
    _id: string,
    title: string,
    style: string,
    learnedAt: string,
    imageURL: string,
}


export type {Skill}