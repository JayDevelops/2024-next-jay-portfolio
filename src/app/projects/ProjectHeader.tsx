import {HeadingOne} from "@/components/ui/Typography/Headers";
import {Text} from "@/components/ui/Typography/Text";
import React from "react";
import Link from "next/link"

export default function ProjectHeader() {
    return (
        <>
            <HeadingOne color="primary">
                Full Stack Developer
            </HeadingOne>
            <Text className="text-muted-foreground my-2 lg:w-[95%]" variant="large">
                I bring extensive expertise in crafting dynamic web applications using cutting-edge technologies such as Next.js, ReactJS, PHP, and WordPress.
                My proficiency extends to working with advanced tools and databases, including Prisma, React Query, MySQL, and MongoDB. My primary focus is on utilizing
                Next.js in conjunction with ReactJS to develop aesthetically pleasing and highly functional web solutions. Check out some featured projects below,
                if you like me for your next project then <Link href="/contact" className="underline text-primary hover:text-primary/50">contact me.</Link>
            </Text>
        </>
    )
}