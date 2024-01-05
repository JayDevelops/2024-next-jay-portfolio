import ExperienceTimeline from "@/app/about/ExperienceTimeline"
import { HeadingThree} from "@/components/ui/Typography/Headers"
import AboutMeHeaders from "@/app/about/AboutMeHeaders"
import DownloadResume from "@/app/about/DownloadResume"

export default function Projects() {
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
        </div>
    )
}
