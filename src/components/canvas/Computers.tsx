import { Suspense, useEffect, useState, FC } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'

const Computer: FC = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                scale={0.75}
                position={[0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
                object={computer.scene}
            />
        </mesh>
    )
}

const ComputerCanvas: FC = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            {/*
              If we use Suspense inside the Canvas, we get the following error:
              Uncaught Error: R3F: Div is not part of the THREE namespace! Did you
              forget to extend?
            */}
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas
