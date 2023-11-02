"use client"
import { Html, useProgress } from "@react-three/drei"
import styles from './CanvasLoader.module.scss'

export default function CanvasLoader(){
    const { progress } = useProgress()
    return (
        <Html className={styles.canvasLoader}>
            <div className={styles.loadingText}>
                {`Loading: ${progress.toFixed(2)}%`}
            </div>
        </Html>
    )
}