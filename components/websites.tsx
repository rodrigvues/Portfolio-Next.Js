"use client"

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { websitesData } from '@/lib/data';
import Website from '@/components/website';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Websites() {
  const { ref } = useSectionInView('Websites', 0.5);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex flex-col items-center px-4 mb-16" ref={ref}>
      <section className="mb-20 w-[350px] sm:w-[800px]  text-center sm:mb-0 scroll-mt-[100rem]">
        
        <div className="relative">
          <motion.div 
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 w-full px-2"
            style={{
              scrollbarWidth: 'none',
              // Apply a mask that fades the content on the left and right edges.
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
            }}
          >
            {websitesData.map((website, index) => (
              <Website key={index} {...website} />
            ))}
            
            <style jsx global>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
