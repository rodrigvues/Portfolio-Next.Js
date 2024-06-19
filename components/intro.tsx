"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithub, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
          <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }}    
            transition={{
              type: "tween",
              duration: 0.2,
            }}      
          >
           <Image src={"https://media.licdn.com/dms/image/D4D35AQFaMIMgb7N8Gg/profile-framedphoto-shrink_200_200/0/1716699111859?e=1719201600&v=beta&t=pyrXOkWVLGDd7sVEbatIKaaVf5NReQJyiUgL_jD3MZo"} alt="Vitor Rodrigues ( Retrato )" 
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>  
          

            <motion.span className='absolute bottom-0 right-0 text-[28px]'
              initial={{ opacity: 0, scale: 0 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}    
            >👋</motion.span>
          </div>       
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text:4xl'
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}    
        >
          <span className="font-bold">Olá, meu nome é Vitor.</span> Sou um{" "}
          <span className="font-bold">Dev e Estudante</span> em{" "}
          <span className="font-bold">Blumenau</span> e adoro desenvolver {" "}
          <span className="underline">websites & apps</span>. Foco no desenvolvimento com <span className="italic">React e Next.js</span> e no momento estou cursando{" "}
          <span className="font-bold">Desenvolvimento
          de Sistemas</span> no SENAI.
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}   
        >
          <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
          Entre em Contato <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>  
          </Link>


          <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10'
          href='/CV.pdf'download
          >
            Baixe meu Currículo <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/> 
          </a>


          <a href="https://linkedin.com/in/rodrigvues" target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/10'>
            <BsLinkedin />
          </a>


          <a href="https://github.com/rodrigvues" target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  )
}
