import React from 'react'

interface CardProjectProps {
    name: string,
    icon: React.JSX.Element
    urlSite: string
    urlGithub?: string
}

const CardProject = ({ name, icon, urlSite, urlGithub }: CardProjectProps) => {
    return (
        <a href={urlSite} className='h-[270px] w-[200px] bg-gradient-to-tr from-slate-700 to-slate-500/80 rounded-tl-lg rounded-br-lg text-lg shadow-md flex flex-col gap-3 items-center justify-center text-gray-200 shrink-0 transition-all hover:translate-y-[20px]'>
            <div className='text-2xl'>
                {icon}
            </div>
            <h2 className='text-center'>{name}</h2>
        </a>
    )
}

export default CardProject
