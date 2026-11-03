'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { steps } from '@/lib/content'

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 80%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const lineScale = reduce ? 1 : progress

  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="relative overflow-hidden bg-peacock py-24 text-ivory sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-peacock-deep/60 to-transparent"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-5 sm:px-8">
        <SectionHeading
          id="how-heading"
          tone="dark"
          eyebrow="02 — How it works"
          lines={[
            'From Your Details to a',
            <>
              <em className="text-gold-light">Beautiful</em> Invitation.
            </>,
          ]}
          description="Four simple steps. No video-editing skills needed."
        />

        <ol ref={listRef} className="relative grid gap-12 md:grid-cols-4 md:gap-8">
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-[1.4rem] w-px bg-ivory/15 md:top-[1.4rem] md:right-[12.5%] md:bottom-auto md:left-[12.5%] md:h-px md:w-auto" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: lineScale }}
            className="absolute top-0 bottom-0 left-[1.4rem] w-px origin-top bg-gold-light md:hidden"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleX: lineScale }}
            className="absolute top-[1.4rem] right-[12.5%] left-[12.5%] hidden h-px origin-left bg-gold-light md:block"
          />

          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.12} className="flex gap-6 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-[3px] border border-gold-light bg-peacock font-serif text-lg text-gold-light">
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-2 pt-1 md:pt-4">
                  <h3 className="font-serif text-2xl leading-tight font-medium">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ivory/85 md:mx-auto md:max-w-[15rem]">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
