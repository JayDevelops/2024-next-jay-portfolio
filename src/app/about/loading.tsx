import Skeleton from "@/components/Skeleton/Skeleton"
import {Text} from "@/components/ui/Typography/Text"

export default function LoadingAbout() {
    return (
        <div className="mt-24">
            <section className="grid-cols-2 gap-5 mb-12">
                <Skeleton height="3rem" className="col-span-2" />

                <Text className="col-span-2">
                    <Skeleton count={4} />
                </Text>

                <br/>

                <Skeleton height="2rem"/>
            </section>

            <section className="flex flex-col col-span-2 gap-8">
                <div className="col-span-2">
                    <Skeleton height="3rem" className="text-center mb-4" />
                    <Skeleton height="20rem" />
                </div>

                <div className="col-span-2">
                    <Skeleton height="3rem" className="text-center mb-4" />
                </div>
            </section>
        </div>
    )
}