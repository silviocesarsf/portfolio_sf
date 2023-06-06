import React from 'react'

interface TitleProps {
    children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {

    return (
        <div data-aos="fade-right" className='w-full flex items-center justify-start gap-3'>
            {/* Text title */}
            <h1 className='text-2xl text-left'>
                {children}
            </h1>
            {/* Line */}
            <div className='w-full h-[1px] bg-slate-500 rounded-full' />
        </div>
    )
}

export default Title
