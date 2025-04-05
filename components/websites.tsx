"use client"

import React, { useState, useEffect, useRef } from 'react'
import { websitesData } from '@/lib/data'
import Website from '@/components/website'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function Websites() {
  const { ref } = useSectionInView('Websites', 0.5)
  const [isDesktop, setIsDesktop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [offsetWidth, setOffsetWidth] = useState(0)

  // Detecta se estamos em desktop (min-width: 640px)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)")
    setIsDesktop(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  // Calcula a largura de uma única "rodada" de cards (3 cards)
  useEffect(() => {
    if (isDesktop && containerRef.current) {
      // Como duplicamos os cards, a largura total é de 2 conjuntos.
      // Precisamos da largura do primeiro conjunto para fazer a animação contínua.
      setOffsetWidth(containerRef.current.scrollWidth / 2)
    }
  }, [isDesktop])

  // Em desktop duplicamos os cards para o loop infinito
  const desktopCards = isDesktop ? [...websitesData, ...websitesData] : websitesData

  return (
    <main className="flex flex-col items-center px-4 mb-16" ref={ref}>
      <section className="mb-20 w-[350px] sm:w-[800px] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="relative">
          <div 
            className={`w-full px-2 ${isDesktop ? 'overflow-hidden' : 'overflow-x-auto snap-x snap-mandatory'}`}
            style={{
              // Aplica o efeito fade nas laterais
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
            }}
          >
            {isDesktop ? (
              <motion.div 
                ref={containerRef}
                className="flex gap-4 pb-8"
                animate={{ x: [0, -offsetWidth] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              >
                {desktopCards.map((website, index) => (
                  <Website key={index} {...website} />
                ))}
              </motion.div>
            ) : (
              <div className="flex gap-4 pb-8">
                {websitesData.map((website, index) => (
                  <Website key={index} {...website} />
                ))}
              </div>
            )}
            <style jsx global>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </section>
    </main>
  )
}
