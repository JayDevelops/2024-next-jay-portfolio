import React from 'react'
import RenderContactForm from "@/components/Contact/RenderContactForm"
import ContactHeader from "@/components/Contact/ContactHeader/ContactHeader"
import {Metadata} from "next"
import Container from "@/components/Container"

export default async function Contact() {
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
    description:
        'Connect with Jesus Perez Arias, an experienced Full-Stack Software Engineer based in Los Angeles, California. ' +
        'Offering expertise in Next.js, ReactJS, PHP, and WordPress, with over four plus years of hands-on experience developing robust and scalable solutions for diverse projects. ' +
        'Whether you have questions, project inquiries, or collaboration ideas, reach out to Jesus Perez for professional and reliable software development services. ' +
        'Transform your digital ideas into reality with a skilled and dedicated developer. Contact Jesus Perez today.',
}