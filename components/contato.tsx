"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'

export default function Contato() {
  const { ref } = useSectionInView('Contato');

  return (
    <motion.section id='contato' ref={ref} className='mb-20 sm:mb-28 w-[min(100%,30rem)] text-center scroll-mt-28'
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{
            once: true,
        }}
    >
      <SectionHeading>Entre em Contato</SectionHeading>
      <p className='text-gray-700 -mt-6'>Fale comigo atráves do meu e-mail, <a className='underline' href='mailto:rodrigvues@gmail.com'>rodrigvues@gmail.com</a>, ou através da caixa de mensagem abaixo.</p>
      <form className='mt-10 flex flex-col ' 
      action={async (formData) => {
        await sendEmail(formData);
      }} >
        <input className='h-14 px-4 rounded-lg borderBlack' 
        type="email" 
        name='sernderEmail'
        required
        maxLength={500}
        placeholder='Seu E-mail' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4' 
        name="message" 
        required
        maxLength={500}
        id="" 
        placeholder='Sua Mensagem' />
        <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 ' >
            Enviar
            <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 '/>{" "} 
        </button>
      </form>
    </motion.section>
  )
}
