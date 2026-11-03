'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { ArchFrame } from '@/components/arch-frame'
import { MehndiDivider } from '@/components/garland-divider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { StyleDialog } from '@/components/style-dialog'
import { creativeStyles, styleThemeClasses, type CreativeStyle } from '@/lib/content'
import { cn } from '@/lib/utils'

export function CreativeStyles() {
  const [selected, setSelected] = useState<CreativeStyle | null>(null)

  return (
    <section id="styles" aria-labelledby="styles-heading" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 sm:px-8">
        <MehndiDivider />
        <SectionHeading
          id="styles-heading"
          eyebrow="01 — Choose your style"
          lines={[
            'An Invitation That',
            <>
              Feels Like <em className="text-rani">You.</em>
            </>,
          ]}
          description="Choose the visual world that brings your wedding story to life."
        />

        <ul className="grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
          {creativeStyles.map((style, i) => {
            const theme = styleThemeClasses[style.theme]
            return (
              <li key={style.id}>
                <Reveal delay={i * 0.1} className="h-full">
                  <article className={cn('group flex h-full flex-col rounded-md p-3 pb-6', theme.panel)}>
                    <div className="p-2.5">
                      <ArchFrame className="aspect-[3/4]" outlineClassName={theme.ring}>
                        <Image
                          src={style.image}
                          alt={style.alt}
                          fill
                          sizes="(min-width: 768px) 30vw, 90vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                      </ArchFrame>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 px-3 pt-5">
                      <p className={cn('text-[11px] font-semibold tracking-[0.24em] uppercase', theme.label)}>
                        Style 0{i + 1} — {style.short}
                      </p>
                      <h3 className="font-serif text-3xl leading-tight font-medium">{style.title}</h3>
                      <p className="text-sm leading-relaxed opacity-90">{style.description}</p>
                      <button
                        type="button"
                        onClick={() => setSelected(style)}
                        className={cn(
                          'mt-auto inline-flex items-center justify-center gap-2 self-start rounded-[3px] px-5 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none',
                          theme.button,
                        )}
                      >
                        Explore Style
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                        <span className="sr-only">: {style.title}</span>
                      </button>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>

      <StyleDialog style={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  )
}
