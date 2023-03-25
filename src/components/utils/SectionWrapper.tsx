import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'

import { styles } from '../../styles'

type SectionWrapperProps = PropsWithChildren & {
    idName: string
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, idName }) => (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        {children}
    </motion.section>
)

export default SectionWrapper
