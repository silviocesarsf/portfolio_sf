import React from 'react'

interface CardSoftSkillProps {
    title: string
    icon: React.JSX.Element
}

const CardSoftSkill = ({ title, icon }: CardSoftSkillProps) => {
    return (
        <div className='w-[200px] h-[200px] bg-slate-800 rounded-full flex flex-col items-center justify-center shadow-md space-y-4 shrink-0 transition-all hover:scale-105 hover:bg-slate-700'>
            {/* Icon */}
            <div className='text-3xl'>
                {icon}
            </div>
            {/* Title */}
            <h1 className='text-lg max-w-[50%] text-center'>{title}</h1>
        </div>
    )
}

export default CardSoftSkill
