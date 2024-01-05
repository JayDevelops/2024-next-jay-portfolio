import {HeadingOne} from "@/components/ui/Typography/Headers";
import {Text} from "@/components/ui/Typography/Text";
import React from "react";

export default function ProjectHeader() {
    return (
        <>
            <HeadingOne color="primary">
                Full Stack Developer
            </HeadingOne>
            <Text className="text-muted-foreground" variant="large">
                Jesus Perez focuses on building full-stack web applications and mobile applications.
            </Text>
        </>
    )
}