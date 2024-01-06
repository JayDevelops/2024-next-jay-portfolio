import ExperienceTimeline from "@/app/about/ExperienceTimeline"
import {HeadingThree} from "@/components/ui/Typography/Headers"
import AboutMeHeaders from "@/app/about/AboutMeHeaders"
import DownloadResume from "@/app/about/DownloadResume"
import {client} from "@/lib/sanity"
import Image from "next/image"

export default async function Projects() {
    const skills: Skill[] = await getSkills()

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

                    {skills.map((skill) => (
                        <div key={skill._id}>
                            <Image src={skill.imageURL} alt={skill.title} width={500} height={500}/>
                            <p className={skill.style}>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
interface Skill {
    _id: string,
    title: string,
    style: string,
    imageURL: string,
}

export async function getSkills() {
    const skillQuery = `*[_type=="skill"] {
        title,
        _id,
        style,
        "imageURL": image.asset->url,
    }`
    return await client.fetch(skillQuery);
}