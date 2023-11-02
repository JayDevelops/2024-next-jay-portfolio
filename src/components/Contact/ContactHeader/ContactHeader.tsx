import React from "react"
import ContactListItems from "@/components/Contact/ContactHeader/ContactDetails/ContactListItems"


export default function ContactHeader() {
    return (
        <section className="px-8 md:px-7 md:mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3 text-left mt-10">
                    <h1 className="text-primary text-4xl font-extrabold">
                        Contact Jesus Perez
                    </h1>
                </div>

                <ContactListItems />
            </div>
        </section>
    )
}