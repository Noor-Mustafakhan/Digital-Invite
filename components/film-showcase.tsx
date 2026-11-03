'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Clock, Play } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { VideoDialog } from '@/components/video-dialog'
import { showcaseItems, styleThemeClasses, type ShowcaseItem } from '@/lib/content'
import { cn } from '@/lib/utils'

export function FilmShowcase() {
  const [active, setActive] = useState<ShowcaseItem | null>(null)

  return (
    <section aria-labelledby="showcase-heading" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="showcase-heading"
            align="left"
            eyebrow="Sample concepts"
            lines={[
              'Stories Worth',
              <>
                <em className="text-rani">Celebrating.</em>
              </>,
            ]}
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Concept frames showing the range of films we create, from intimate mehndi details to full baraat scenes.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {showcaseItems.map((item, i) => (
            <li key={item.id}>
              <Reveal delay={(i % 2) * 0.1} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-md bg-ivory text-left ring-1 ring-gold/30 transition-shadow hover:shadow-xl hover:shadow-maroon/10 focus-visible:ring-2 focus-visible:ring-rani focus-visible:outline-none"
                >
                  <span className="relative block aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-14 items-center justify-center rounded-[3px] bg-ivory/95 text-rani shadow-lg transition-colors group-hover:bg-rani group-hover:text-ivory">
                        <Play aria-hidden="true" className="size-5 fill-current" />
                      </span>
                    </span>
                    <span
                      className={cn(
                        'absolute top-4 left-4 rounded-[3px] px-2.5 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase',
                        styleThemeClasses[item.theme].tag,
                      )}
                    >
                      {item.styleTag}
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                    <span className="flex items-start justify-between gap-4">
                      <span className="font-serif text-2xl leading-tight font-medium text-ink">{item.title}</span>
                      <span className="inline-flex shrink-0 items-center gap-1.5 pt-1.5 text-xs font-medium text-muted-foreground">
                        <Clock aria-hidden="true" className="size-3.5" />
                        {item.duration}
                      </span>
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item.description}</span>
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <VideoDialog
        open={active !== null}
        onOpenChange={(open) => !open && setActive(null)}
        title={active?.title ?? ''}
        poster={active?.image ?? showcaseItems[0].image}
        posterAlt={active?.alt ?? ''}
      />
    </section>
  )
}
