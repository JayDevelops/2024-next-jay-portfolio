import React from 'react'
import RenderContactForm from "@/components/Contact/RenderContactForm"
import ContactHeader from "@/components/Contact/ContactHeader/ContactHeader"
import {Metadata} from "next"
import Container from "@/components/Container"
import delay from "delay"

export default async function Contact() {
    await delay(2000)
    return (
        <div className="my-12">
            <Container>
                <ContactHeader />
                <RenderContactForm />
            </Container>
        </div>
    )
}
export const metadata: Metadata = {
    title: 'Contact',
    description: 'Experienced Full-Stack Software Engineer based in Los Angeles, California, offering expertise in Next.js, ReactJS, PHP, and WordPress. Over three years of hands-on experience developing robust and scalable solutions for diverse projects. Contact Jesus Perez for your software development needs.'
}