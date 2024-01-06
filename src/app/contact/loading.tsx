import {HeadingTwo} from "@/components/ui/Typography/Headers"
import Container from "@/components/Container"
import Skeleton from "@/components/Skeleton/Skeleton"

export default function LoadingContact() {
    const dummyContactColumns: number[] = [1, 2, 3]

    return (
        <div className="my-12">
            <Container>
                <section className="px-8 md:px-7 md:mx-auto max-w-screen-xl mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-3 text-left mt-10">
                            <Skeleton height="2rem" width="14rem"/>
                        </div>

                        {dummyContactColumns.map((contactItem, index) => (
                            <div key={index} className="md:col-span-1">
                                <Skeleton height="1rem" count={4}/>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="contact-form contact-jesus-perez">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:w-full md:col-span-1">
                                <div className="p-8 rounded-2x1">
                                    <HeadingTwo color="secondary-foreground" className="capitalize">
                                        Loading Contact Form Below... Please Wait...
                                    </HeadingTwo>

                                    <div className="mt-12 flex flex-col gap-8">
                                        <Skeleton height="28rem"/>
                                    </div>
                                </div>
                            </div>

                            <div className="w-auto md:w-full md:col-span-1 mt-24">
                                <Skeleton height="20rem" />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}
