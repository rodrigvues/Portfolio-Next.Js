"use client"

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Projeto from './projeto'

export default function Projetos() {
  return (
    <section>
        <SectionHeading>Meus projetos</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Projeto {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
