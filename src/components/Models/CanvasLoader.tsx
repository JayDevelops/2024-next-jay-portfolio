"use client"
import { Html, useProgress } from "@react-three/drei"
import styles from './CanvasLoader.module.scss'
import Skeleton from "react-loading-skeleton";

export default function CanvasLoader(){
    const { progress } = useProgress()
    return (
        <Skeleton height="15rem"/>
    )
}