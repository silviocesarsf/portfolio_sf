"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from "../../assets/logo-resized.png"

const Header = () => {

    const [scrollStyle, setScrollStyle] = useState({})

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop | document.body.scrollTop

        if (scrollTop === 0) {
            return setScrollStyle({
                transition: ".5s",
            });
        } else {
            setScrollStyle({
                transition: ".5s",
                height: "50px",
                backgroundColor: "#00000044",
            });
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div style={scrollStyle} className='fixed top-0 h-[70px] w-full px-paddingX py-3 flex items-center justify-between backdrop-blur-sm z-50'>
            {/* Links */}
            <div>
                <ul className="flex items-center space-x-5 text-sm">
                    <a href='#' className='hover:text-gray-400 transition-colors'>Sobre mim</a>
                    <a href='#' className='hover:text-gray-400 transition-colors'>Conhecimentos</a>
                    <a href='#' className='hover:text-gray-400 transition-colors'>Projetos</a>
                    <a href='#' className='hover:text-gray-400 transition-colors'>Contato</a>
                </ul>
            </div>
            {/* Logo */}
            <a href='#'>
                <Image src={Logo} alt='Logo Silvio César' height={40} width={40} />
            </a>
        </div>
    )
}

export default Header
