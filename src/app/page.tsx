"use client"
import Title from '@/components/Title/Title'
import React, { useEffect } from 'react'
import { FaChevronCircleDown } from "react-icons/fa"
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Aos from 'aos'
import Code from '@/components/Code/Code'

const page = () => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <main className='container mx-auto h-screen px-paddingX py-3'>
      {/* Home */}
      <div className='w-full h-full flex items-center justify-between'>
        {/* Hero home */}
        <div data-aos="fade-up" className='w-full h-full flex flex-col items-center justify-center text-center space-y-5'>
          <h1 className='text-4xl font-semibold'>Olá, me chamo Silvio César</h1>
          <div className='flex flex-col items-center justify-center text-gray-300 space-y-5'>
            <p className='text-2xl'>Sou um <span className='bg-slate-600 py-1 px-2 font-bold'>Desenvolvedor Front End</span></p>
            <p className='text-lg'>e estou em busca de um <span className='font-semibold'>emprego</span></p>
          </div>
          <FaChevronCircleDown className='text-white text-3xl cursor-pointer animate-bounce' />
        </div>
        {/* Code home */}
        <div data-aos="fade-up" data-aos-delay="600">
          <Code title='infos'>
            <div className='w-full ml-3 my-2 text-[#C9D4D4] '>
              <p>nome: <span className='text-[#CE9178]'>"silvio"</span>,</p>
              <p>idade: <span className='text-[#94CEA8]'>19</span>,</p>
              <p>profissão: <span className='text-[#CE9178]'>"Dev Front end"</span> <span className='animate-pulse-fast'>|</span></p>
            </div>
          </Code>
        </div>
      </div>
      {/* About me */}
      <div className="w-full h-full py-[90px]">
        <Title>Quem sou eu ?</Title>
        <div className="w-full h-full flex items-center justify-between">
          {/* Text about me */}
          <div data-aos="fade-left" data-aos-delay="200" className="max-w-[40%] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, saepe error consequatur officia repellendus, culpa numquam cumque illo voluptatibus neque fuga nobis, deserunt quidem? Repudiandae dolore incidunt facilis velit. Enim.
            lorem
          </div>
          {/* Card about me */}
          <div data-aos="fade-down" data-aos-delay="500" className='relative w-[240px] h-[500px] rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-between'>
            {/* Card image */}
            <div className='relative h-full w-full bg-slate-600' />
            {/* Card text */}
            <div className="w-full h-36 bg-black/90 text-white flex flex-col items-start justify-center p-3 gap-2">
              <h1 className='font-medium'>Silvio César, <span className='font-bold'>19</span></h1>
              <h2 className='text-sm text-gray-300 font-light mb-1'>Presidente Venceslau - SP</h2>
              <div className='flex items-center gap-4 text-xl'>
                <a href="#" title='Linkedin'>
                  <AiFillLinkedin />
                </a>
                <a href="#" title='Github'>
                  <AiFillGithub />
                </a>
                <a href="#" title='Email'>
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default page
