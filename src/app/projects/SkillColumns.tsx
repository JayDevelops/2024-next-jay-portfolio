// SkillColumns.tsx

import Image from "next/image"
import { Text } from "@/components/ui/Typography/Text"
import { Skill } from "@/app/about/page"

interface SkillColumnsProps {
    skills: Skill[];
}

export default function SkillColumns({ skills }: SkillColumnsProps) {
    return (
        <>
            {skills.map((skill) => (
                <div
                    key={skill._id}
                    className="flex items-center justify-between space-x-2 bg-secondary p-2 rounded-lg"
                >
                    <div className="flex items-center space-x-2">
                        <div className="relative flex h-8 w-8 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-full bg-secondary">
                            <Image
                                src={skill.imageURL}
                                height={50}
                                width={50}
                                alt={skill.title}
                                priority
                                className="aspect-square h-full w-full"
                            />
                        </div>
                        <p className="text-secondary-foreground ml-2 text-sm md:text-base">{skill.title}</p>
                    </div>
                    <div>
                        {skill.learnedAt && (
                            <Text variant="small" className="text-muted-foreground">
                                {calculateExperience(skill.learnedAt)}+ years
                            </Text>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

function calculateExperience(learnedAt: string) {
    const startDate: Date = new Date(learnedAt);
    const currentDate: Date = new Date();

    const years: number = currentDate.getFullYear() - startDate.getFullYear();

    // Adjust if the current date has not reached the anniversary of the start date
    if (currentDate < new Date(currentDate.getFullYear(), startDate.getMonth(), startDate.getDate())) {
        return years - 1;
    }

    return years;
}