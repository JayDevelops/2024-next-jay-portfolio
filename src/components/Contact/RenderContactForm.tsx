"use client"
import ContactForm from "@/components/Contact/ContactForm/ContactForm"
import {Toaster} from "sonner"
import dynamic from "next/dynamic"
import {HeadingTwo} from "@/components/ui/Typography/Headers"
import CanvasLoader from "@/components/Models/CanvasLoader";

export default function RenderContactForm() {
    const EarthDynamicComponent: React.ComponentType<{}> = dynamic(() => import("@/components/Models/Earth/Earth"), {
        loading: () => {
            return (
                <div className="mt-24 flex flex-col gap-8">
                    <CanvasLoader height="20rem" />
                </div>
            )
        },
        ssr: false,
    })
    return (
        <section className="contact-form contact-jesus-perez">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:w-full md:col-span-1">
                        <div className="p-8 rounded-2x1">
                            <HeadingTwo color="secondary-foreground" className="capitalize">
                                Fill out the contact form to hire me.
                            </HeadingTwo>
                            <ContactForm />
                        </div>
                    </div>

                    <div className="w-auto md:w-full md:col-span-1">
                        <EarthDynamicComponent />
                    </div>
                </div>
                <Toaster richColors position="top-left" />
            </div>
        </section>
    )
}