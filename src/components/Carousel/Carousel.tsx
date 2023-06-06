"use client"
import React, { useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

interface CarouselProps {
    children: React.ReactNode
    title: string
    shadow?: boolean
}

const Carousel = ({ children, title, shadow }: CarouselProps) => {

    const carousel = useRef<HTMLDivElement>(null)

    const [hasOverflow, setHasOverflow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (carousel.current) {
                setHasOverflow(carousel.current.clientWidth < carousel.current.scrollWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScrollLeft = () => {
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    }

    const handleScrollRight = () => {
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
    }

    return (
        <div className='w-full flex flex-col items-start justify-center mt-6'>
            {/* Title carousel */}
            <h2 className='text-gray-400 text-md'>// {title}</h2>
            <div className='w-full flex items-center relative'>
                {hasOverflow && (
                    <>
                        {/* Control left */}
                        <div onClick={handleScrollLeft} className="cursor-pointer text-xl absolute left-[-3%] opacity-60 transition-all hover:scale-105 hover:opacity-100">
                            <BsChevronLeft />
                        </div>
                    </>
                )}
                <div ref={carousel} className={`w-full flex items-center ${hasOverflow ? "justify-start " : "justify-between"} space-x-5 overflow-x-auto py-4 scroll-smooth`}>
                    {children}
                </div>
                {/* Shadow */}
                {shadow && <div className="absolute right-0 h-[260px] w-[100px] bg-gradient-to-r from-transparent to-black" />}
                {hasOverflow && (
                    <>
                        {/* Control right */}
                        <div onClick={handleScrollRight} className="cursor-pointer text-xl absolute right-[-3%] opacity-60 transition-all hover:scale-105 hover:opacity-100">
                            <BsChevronRight />
                        </div>
                    </>
                )}
            </div>
        </div >
    )
}

export default Carousel
