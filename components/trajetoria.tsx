"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { trajetoriaData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Trajetoria() {
  const { ref } = useSectionInView('Trajetória');

  return (
    <section id='trajetoria' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>Minha Trajetória</SectionHeading>
      <VerticalTimeline lineColor="">
        {trajetoriaData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:"#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
/*<SectionHeading>Minha Trajetória</SectionHeading>
        <VerticalTimeline>
            {formacaoData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement>
                        <h3>{item.title}</h3>
                        <h4>{item.location}</h4>
                        <p>
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>*/