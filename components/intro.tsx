"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.6);
  const {
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();
  /*const {ref, inView} = useInView({
    threshold: 0.6,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Home');
  }}, [inView, setActiveSection, timeOfLastClick]); */

  return (
    <section 
    ref={ref}
    className='mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]'
    id='home'
    >
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
           <Image src={"/profilepicture.jpg"} alt="Vitor Rodrigues ( Retrato )" 
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>  
          

            <motion.span className='absolute bottom-0 right-0 text-4xl'
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

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text:4xl'
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}    
        >
          <span className="font-bold">Olá, meu nome é Vitor.</span> Sou um{" "}
          <span className="font-bold">Dev e Estudante</span> em{" "}
          <span className="font-bold">Blumenau</span>. Foco no desenvolvimento <span className="italic underline">Web</span> e no momento estou cursando{" "}
          <span className="font-bold">ADS</span> na Estácio.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}   
        >
          <Link href="#contato" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition' onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}>
          Entre em Contato <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>  
          </Link>


          <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/CV.pdf'download
          >
            Baixe meu Currículo <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/> 
          </a>

          <Link className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/websites'
          >
            Precisa de um website?  
          </Link>

          <a href="https://github.com/rodrigvues" target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
            <FaGithubSquare />
          </a>


          <a href="https://linkedin.com/in/rodrigvues" target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
            <BsLinkedin />
          </a>


          

          
        </motion.div>
    </section>
  )
}
