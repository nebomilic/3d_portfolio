import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar: FC = () => {
    const [active, setActive] = useState('')
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('')
                        window.scrollTo(0, 0)
                    }}
                    to="/"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Adrian{' '}
                        <span className="sm:block hidden">
                            | Javascript Mastery
                        </span>
                    </p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
