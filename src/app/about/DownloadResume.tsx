import {DownloadIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import React from "react";

export default function DownloadResume() {
    return (
        <Button>
            Download Resume &nbsp; <DownloadIcon />
        </Button>
    )
}