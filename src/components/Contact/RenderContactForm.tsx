"use client"
import ContactForm from "@/components/Contact/ContactForm/ContactForm"
import Earth from "@/components/Models/Earth/Earth"
import {Toaster} from "sonner"
import dynamic from "next/dynamic"
import React from "react"

export default function RenderContactForm() {
    const EarthDynamicComponent: React.ComponentType<{}> = dynamic(() => import("@/components/Models/Earth/Earth"), {
        loading: () => <p className="flex h-screen items-center text-center">Loading...</p>,
    })
    return (
        <section className="contact-form contact-jesus-perez">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full">
                        <div className="p-8 rounded-2x1">
                            <h2 className="text-secondary-foreground font-medium text-2xl capitalize">Fill out the contact form below to hire me for full-time or freelance work...</h2>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="w-full">
                        <EarthDynamicComponent />
                    </div>
                </div>
                <Toaster richColors position="top-left" />
            </div>
        </section>
    )
}