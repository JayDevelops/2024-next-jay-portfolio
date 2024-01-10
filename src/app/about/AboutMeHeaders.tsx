import {HeadingOne} from "@/components/ui/Typography/Headers";
import {Text} from "@/components/ui/Typography/Text";
import React from "react";

export default function AboutMeHeaders() {

    return (
        <>
            <HeadingOne className="text-4xl font-bold text-primary col-span-2">
                About Me
            </HeadingOne>
            <Text className="col-span-2">
                As a seasoned Full-Stack Software Engineer based in Montebello, California, I bring extensive expertise in crafting dynamic web applications using cutting-edge technologies such as Next.js, ReactJS, PHP, and WordPress. My proficiency extends to working with advanced tools and databases, including Prisma, React Query, MySQL, and MongoDB. My primary focus is on utilizing Next.js in conjunction with ReactJS to develop aesthetically pleasing and highly functional web solutions.

               With a bachelor's degree in computer science from California State University, Los Angeles with over four-plus years of hands-on experience, I have successfully delivered robust and scalable solutions across diverse projects. My skill set also encompasses mobile application development using React Native and Swift, enabling the creation of exceptional and user-friendly mobile applications.

                Currently, I am actively seeking new opportunities for professional growth, and I am available for freelance work. I am eager to contribute my expertise to various projects, further enhancing my skills in full-stack development. I look forward to collaborating on innovative projects and delivering outstanding results.
            </Text>
        </>
    )
}