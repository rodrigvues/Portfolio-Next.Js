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
        <p >
        Lorem ipsum dolor sit amet, consectetur{" "}
        <span className="font-medium">adipiscing elit,</span> sed{" "}
        <span className="font-medium">do </span>eiusmod tempor incididunt ut labore {" "}
        <span className="font-medium">et dolore magna aliqua.</span> Ut {" "}
        <span className="font-medium">enim </span> ad  <span className="font-medium">minim </span>, 
        onde aprendi <span className="font-medium">veniam , quis nostrud</span>exercitation ullamco laboris{" "}
        <span className="font-medium">nisi ut aliquip ex ea</span> commodo {" "}
        <span className="font-medium">consequat. Duis aute</span>irure{" "}
        <span className="font-medium">dolor in reprehenderit</span>.
        </p>

    </motion.section>
  )
}
