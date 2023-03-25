import { FC } from 'react'
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader: FC = () => {
    const { progress } = useProgress()
    return (
        <Html>
            <span className="canvas-load"></span>
            <p className="text-lg mt-12 text-white">{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default CanvasLoader
