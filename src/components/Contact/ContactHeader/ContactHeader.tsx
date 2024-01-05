import React from "react"
import ContactListItems from "@/components/Contact/ContactHeader/ContactDetails/ContactListItems"
import {HeadingOne} from "@/components/ui/Typography/Headers";


export default function ContactHeader() {
    return (
        <section className="px-8 md:px-7 md:mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3 text-left mt-10">
                    <HeadingOne color="primary">
                        Contact Jesus Perez
                    </HeadingOne>
                </div>

                <ContactListItems />
            </div>
        </section>
    )
}