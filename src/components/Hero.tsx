import { FC } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputerCanvas } from './canvas'

const Hero: FC = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-custom-purple" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm{' '}
                        <span className="text-custom-purple">Adrian</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop 3D visuals, user{' '}
                        <br className="sm:block hidden" />
                        interfaces and web applications
                    </p>
                </div>
                <ComputerCanvas />
            </div>
        </section>
    )
}

export default Hero
