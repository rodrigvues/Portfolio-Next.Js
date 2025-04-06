"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';


export default function WebsitesContato() {

  return (
    <motion.section 
    className='mb-[100px] sm:mt-[20px]  max-w-[45rem] text-center leading-8 sm:mb-[100px] scroll-mt-28'
    initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
        <p>
        Além do site, te ajudo com <span className="font-medium">hospedagem</span> e o 
        <span className="font-medium"> registro do domínio .com</span>, garantindo uma 
        <span className="font-medium"> presença profissional</span> para o seu negócio, ou ideia. 
        Para mais informações, <span className="font-medium">fale comigo no botão abaixo</span>!
        </p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-[20px] px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                }}   
                >
        <Link href="https://api.whatsapp.com/send?phone=5547988244702&text=Ol%C3%A1.%0AVenho%20do%20seu%20portfolio%20e%20tenho%20interesse%20pelos%20websites." className='group bg-green-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-green-900 active:scale-105 transition'
        > Entre em Contato <FaWhatsapp className='opacity-70 ml-2 group-hover:translate-x-1 transition'/> </Link>

        </motion.div>

    </motion.section>
  )
};
