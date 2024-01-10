import Link from "next/link"
import React from "react"
import {Metadata} from "next";

export default function Blog() {
    return (
        <div className="my-12">
            <section className="py-12 flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-primary text-center">
                    Blog Is Coming Soon!
                </h1>
                <p className="text-2xl text-muted-foreground px-2">
                    You managed to find a secret page with no 404 status!
                    I am actively working on creating a blog to post my journey but wanted to deploy my new Next.js portfolio ASAP, so I decided to deploy to the public ASAP.
                    Please come back here to see when I have completed my blog.
                    For now please take a look at my projects <Link href="/projects" className="underline text-primary hover:text-primary/50">here.</Link>
                </p>
            </section>
            <div className="flex gap-6 py-6">

            </div>
        </div>
    )
}
export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Exciting news! The blog section on Jesus Perez Arias\'s website is in the works and will be available soon. ' +
        'Stay tuned for insightful articles, industry updates, and personal experiences related to Full-Stack Development, Next.js, ReactJS, PHP, WordPress, and more. ' +
        'Explore the journey of a seasoned Full-Stack Software Engineer, and check back later to dive into the world of technology with Jesus Perez Arias.',
}