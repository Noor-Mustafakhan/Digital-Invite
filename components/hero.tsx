'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, Play } from 'lucide-react'
import { ArchFrame } from '@/components/arch-frame'
import { Garland } from '@/components/garland-divider'
import { LineReveal } from '@/components/reveal'
import { VideoDialog } from '@/components/video-dialog'
import { images } from '@/lib/content'
import { createInvitationHref, siteConfig } from '@/lib/config'
import { buttonStyles } from '@/lib/styles'

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-ivory pt-24 pb-20 sm:pt-28 lg:pb-28">
      <Garland className="absolute inset-x-0 top-0 px-2" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-marigold/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="order-2 flex flex-col items-start gap-8 lg:order-1">
          <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[0.28em] text-gold-deep uppercase">
            AI wedding invitation films
          </motion.p>

          <LineReveal
            as="h1"
            animateOnMount
            delay={0.1}
            lines={[
              'Your Love Story.',
              <>
                Beautifully <em className="text-rani">Invited.</em>
              </>,
            ]}
            className="font-serif text-5xl leading-[1.02] font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          />
          <span id="hero-heading" className="sr-only">
            {siteConfig.tagline}
          </span>

          <motion.p {...fadeUp(0.4)} className="max-w-md text-lg leading-relaxed text-pretty text-muted-foreground">
            {siteConfig.description}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-3">
            <a href={createInvitationHref} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
              Create Your Invitation
            </a>
            <a href="#styles" className={buttonStyles.outlineInk}>
              Explore Designs
              <ArrowDown aria-hidden="true" />
            </a>
          </motion.div>

          <motion.dl {...fadeUp(0.6)} className="grid w-full max-w-md grid-cols-3 gap-4 border-t border-gold/40 pt-6">
            {[
              ['3', 'creative styles'],
              ['MP4', 'ready to share'],
              ['EN · UR', 'languages'],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-2xl text-ink">{value}</dd>
                <dd className="text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <motion.div
            initial={reduce ? false : { scale: 1.04, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[30rem] p-2.5"
          >
            <ArchFrame className="aspect-[4/5]">
              <Image
                src={images.hero}
                alt="South Asian bride and groom in red and gold bridal wear in warm golden-hour light with marigold decor"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent" />
            </ArchFrame>
          </motion.div>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-[3px] bg-ivory/95 py-2 pr-5 pl-2 text-sm font-semibold text-ink shadow-lg shadow-maroon/20 backdrop-blur transition-colors hover:bg-ivory focus-visible:ring-2 focus-visible:ring-rani focus-visible:ring-offset-2 focus-visible:outline-none sm:bottom-10"
          >
            <span className="flex size-9 items-center justify-center rounded-[3px] bg-rani text-ivory transition-colors group-hover:bg-rani-deep">
              <Play aria-hidden="true" className="size-4 fill-current" />
            </span>
            Watch a sample
          </button>
        </div>
      </div>

      <VideoDialog
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="A Golden-Hour Invitation"
        poster={images.hero}
        posterAlt="Sample film poster of a bride and groom at golden hour"
      />
    </section>
  )
}
