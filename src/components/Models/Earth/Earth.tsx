"use client"
import {Suspense, useState} from 'react'
import {Canvas, useThree} from '@react-three/fiber'
import { OrbitControls, useGLTF} from '@react-three/drei'

import CanvasLoader from "@/components/Models/CanvasLoader"


const EarthMesh = () => {
    const earthPlanet = useGLTF('/static/planet/scene.gltf')

    return (
        <primitive
            object={earthPlanet.scene}
            scale={2.1}
            position-y={0}
            rotation-y={0}
        />
    )
}
export default function Earth() {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{preserveDrawingBuffer: true}}
            camera={{
                fov: 45,
                near: 0.1,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback={<CanvasLoader />} >
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <EarthMesh />
            </Suspense>
        </Canvas>
    )
}