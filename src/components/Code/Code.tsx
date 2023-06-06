import React from 'react'

interface CodeProps {
    title: string
    children: React.ReactNode
}

const Code = ({ title, children }: CodeProps) => {
    return (
        <div className='h-[220px] w-[300px] p-4 bg-[#1E1E1E] flex flex-col items-start justify-center gap-3 shadow-md rounded-lg'>
            {/* Code header */}
            <div className="w-full flex items-center justify-start pb-4">
                <div className="flex items-center gap-3">
                    <div className='bg-[#FF564F] h-3 w-3 rounded-full' />
                    <div className='bg-[#FFB529] h-3 w-3 rounded-full' />
                    <div className='bg-[#60C74D] h-3 w-3 rounded-full' />
                </div>
            </div>
            {/* Code content */}
            <div className='w-full'>
                <span className='text-[#569CD6]'>const</span> <span className='text-[#909090]'>{title}</span> = <span className='text-[#9069A3]'>{'{'}</span> <br />
                {children}
                <span className='text-[#9069A3]'>{'}'}</span>
            </div>
        </div>
    )
}

export default Code
