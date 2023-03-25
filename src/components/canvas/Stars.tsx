import { FC, useState, useRef, Suspense, RefObject, LegacyRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { inSphere } from 'maath/random'

const Stars: FC = (props) => {
    // sorry for the any type, but I couldn't get it to work with the RefObject type ¯\_(ツ)_/¯
    const ref: RefObject<any | undefined> = useRef()
    const [sphere] = useState(
        () => inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
    )

    useFrame((state, delta) => {
        if (ref && ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas: FC = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
