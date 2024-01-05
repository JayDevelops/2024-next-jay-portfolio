import ExperienceTimeline from "@/app/about/ExperienceTimeline"
import { HeadingThree} from "@/components/ui/Typography/Headers"
import AboutMeHeaders from "@/app/about/AboutMeHeaders"
import DownloadResume from "@/app/about/DownloadResume"

export default function Projects() {
    return (
        <div className="my-24">
            <section className="grid-cols-2 gap-5">
                <AboutMeHeaders />
                <br />
                <DownloadResume />
            </section>

            <section className="flex flex-col col-span-2">
                <div className="mt-12 col-span-2 mb-6">
                    <HeadingThree className="text-center">
                        My Experiences
                    </HeadingThree>
                </div>
                <div className="col-span-2">
                    <ExperienceTimeline/>
                </div>
            </section>
        </div>
    )
}
