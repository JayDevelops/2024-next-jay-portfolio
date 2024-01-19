import { buttonVariants } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import {DownloadIcon} from "@radix-ui/react-icons";

export default function DownloadResume() {
    return (
        <Link className={buttonVariants({ variant: "outline" })} href="/static/JesusPerez_SoftwareEngineer_Resume2024.pdf" target="_blank">
            Download Resume &nbsp; <DownloadIcon />
        </Link>
    )
}