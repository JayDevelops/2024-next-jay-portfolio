"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import {experiences, Experience} from "@/app/about/experiencesList"
import Image from "next/image"
import {HeadingThree} from "@/components/ui/Typography/Headers";
import {Text} from "@/components/ui/Typography/Text";

export default function ExperienceTimeline() {
    return (
        <VerticalTimeline lineColor="hsl(var(--primary))" animate={false}>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
        </VerticalTimeline>
    )
}
const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "hsl(var(--secondary))",
                color: "hsl(var(--secondary-foreground))",
            }}
            contentArrowStyle={{ borderRight: "hsl(var(--muted-foreground))" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={<WorkIcon experience={experience} />}
        >
            {/* HEADER, COMPANY NAME, DATE, AND BULLET POINT CONTENT FOR ONE CARD BELOW*/}
            <div>
                <HeadingThree color="primary">{experience.title}</HeadingThree>
                <Text
                    variant="small"
                    className="text-secondary-foreground font-semibold"
                >
                    {experience.companyName}
                </Text>

                {/* For each card, iterate through each bullet point and give it an index ID*/}
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((bullet, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-secondary-foreground text-[14px] pl-1 tracking-wider"
                        >
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    )
}
const WorkIcon = ({ experience }: { experience: Experience }) => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <Image
                src={experience.icon}
                alt={experience.companyName}
                className="w-[60%] h-[60%] object-contain"
                width={500}
                height={500}
            />
        </div>
    )
}
