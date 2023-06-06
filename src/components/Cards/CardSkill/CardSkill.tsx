import React from 'react'
import { FaReact } from "react-icons/fa"

interface CardSkillProps {
    title: string,
    icon?: React.JSX.Element
}

const CardSkill = ({ title, icon }: CardSkillProps) => {
    return (
        <div className="h-[260px] w-[240px] bg-black/50 text-gray-300 rounded-md shadow-lg flex flex-col items-center justify-center gap-5 cursor-pointer transition-all hover:bg-white/20 hover:text-white hover:shadow-xl shrink-0">
            {/* Icon */}
            <div className="text-4xl">
                {icon ? icon : <FaReact />}
            </div>
            {/* Text */}
            <h1 className='text-xl font-semibold'>{title ? title : "Habilidade"}</h1>
        </div>
    )
}

export default CardSkill
