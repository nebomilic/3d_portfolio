import { FC } from 'react'

import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import SectionWrapper from './utils/SectionWrapper'

const Tech: FC = () => (
    <SectionWrapper idName="tech">
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    </SectionWrapper>
)

export default Tech
