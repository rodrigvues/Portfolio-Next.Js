"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'


export default function Websitesheadingsection() {

  return (
    <motion.section 
    className='mb-10 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
        <SectionHeading>Precisando de um website?</SectionHeading>
        <p>
        {'->'} Dá uma olhada em alguns que criei e que
        posso fazer também para você, <span className="font-medium">totalmente personalizado com a sua ideia</span>
        </p>



    </motion.section>
  )
}
