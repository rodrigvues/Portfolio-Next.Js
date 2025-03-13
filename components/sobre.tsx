"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'


export default function Sobre() {
  const { ref } = useSectionInView('Sobre');

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    id='sobre'
    >
        <SectionHeading>Sobre mim</SectionHeading>
        <p className='mb-3'>
  Desde pequeno, sempre fui fascinado por{" "}
  <span className="font-medium">tecnologia, internet</span> e{" "}
  <span className="font-medium">computadores</span>. Esse interesse me levou a{" "}
  <span className="font-medium">cursar Desenvolvimento de Sistemas</span> no{" "}
  <span className="font-medium">SENAI</span> em <span className="font-medium">2022</span>, 
  onde aprendi <span className="font-medium">programação na prática</span>, com foco em{" "}
  <span className="font-medium">lógica, Programação Orientada a Objetos</span> e{" "}
  <span className="font-medium">bancos de dados</span>, utilizando{" "}
  <span className="font-medium">Java e MySQL</span>.
</p>
<p className='mb-3'>
  Ao longo da minha formação, conheci{" "}
  <span className="font-medium">React e Next.js</span> e coloquei meu foco no{" "}
  <span className="font-medium">Front-end</span>. Já em{" "}
  <span className="font-medium">2024</span>, ainda antes de me formar em{" "}
  <span className="font-medium">Desenvolvimento de Sistemas</span>, entrei no{" "}
  <span className="font-medium">programa +Devs2Blu</span> da{" "}
  <span className="font-medium">Blusoft</span>, onde estou me aprofundando no{" "}
  <span className="font-medium">desenvolvimento mobile</span> com{" "}
  <span className="font-medium">Flutter</span>. Esse curso tem sido um{" "}
  <span className="font-medium">divisor de águas</span> na minha jornada, pois me{" "}
  <span className="font-medium">permitiu explorar</span> a criação de{" "}
  <span className="font-medium">aplicativos do zero</span>, entender melhor a{" "}
  <span className="font-medium">estrutura de um projeto mobile</span> e aprimorar{" "}
  minhas habilidades com <span className="font-medium">Dart</span> e{" "}
  <span className="font-medium">bancos de dados integrados</span>.
</p>
<p>
  <span className="italic">Fora da programação</span>, sou apaixonado por{" "}
  <span className="font-medium">esportes</span>, especialmente{" "}
  <span className="font-medium">futebol</span>, acompanhando tanto o cenário{" "}
  <span className="font-medium">brasileiro quanto o europeu</span>. Também gosto{" "}
  de <span className="font-medium">pedalar</span>, viajar e{" "}
  <span className="font-medium">explorar novos lugares</span>.
</p>


    </motion.section>
  )
}
