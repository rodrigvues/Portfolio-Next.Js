"use client"

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { websitesData } from "@/lib/data";

type WebsiteProps = typeof websitesData[number];

export default function Website({ title, description, tags, imageUrl, link }: WebsiteProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            className="snap-center w-[288px] sm:w-[18rem] flex-shrink-0"
        >
            <a href={link}>
                <section 
                    className='bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative h-[24rem] hover:bg-gray-200 transition
                    dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col'
                >
                    {/* Image at the top */}
                    <div className="relative w-full h-48 overflow-hidden">
                        <Image
                            src={imageUrl} 
                            alt={title}
                            quality={95}
                            fill
                            sizes="(max-width: 768px) 90vw, 18rem"
                            className='object-cover object-center rounded-t-lg transition group-hover:scale-[1.04]'
                        />
                    </div>
                    
                    {/* Text content below */}
                    <div className='flex-1 pt-4 pb-5 px-5 flex flex-col'>
                        <h3 className='text-xl font-semibold text-left'>{title}</h3>
                        <p className='mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70 flex-grow text-left'>
                            {description}
                        </p>
                        <ul className='flex flex-wrap mt-3 gap-1.5'>
                            {tags.map((tag, index) => (
                                <li 
                                    className='bg-black/[0.7] px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' 
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </a>
        </motion.div>
    );
}
