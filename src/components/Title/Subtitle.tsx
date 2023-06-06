import React from 'react'

interface SubtitleProps {
    children: React.ReactNode
}

const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <div className='w-full text-left'>
            <h1 className='text-md text-gray-400 mt-2'>// {children}</h1>
        </div>
    )
}

export default Subtitle
