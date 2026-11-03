import Image from 'next/image'
import { ArchFrame } from '@/components/arch-frame'
import { Garland } from '@/components/garland-divider'
import { LineReveal, Reveal } from '@/components/reveal'
import { images } from '@/lib/content'
import { createInvitationHref, whatsappLink } from '@/lib/config'
import { buttonStyles } from '@/lib/styles'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-maroon pt-16 pb-24 text-ivory sm:pb-32">
      <Garland className="absolute inset-x-0 top-0 px-2" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-maroon-deep/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="mx-auto w-full max-w-sm p-2.5 lg:max-w-md">
          <ArchFrame className="aspect-[3/4]" outlineClassName="text-gold-light">
            <Image
              src={images.ctaArch}
              alt="Marigold-draped Mughal archway with a couple walking toward warm golden light"
              fill
              sizes="(min-width: 1024px) 448px, 80vw"
              className="object-cover"
            />
          </ArchFrame>
        </Reveal>

        <div className="flex flex-col items-start gap-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-gold-light uppercase">Begin your invitation</p>
          </Reveal>
          <LineReveal
            lines={[
              'Your Wedding Story',
              'Deserves a',
              <em key="beginning" className="text-gold-light">
                Beautiful Beginning.
              </em>,
            ]}
            className="font-serif text-5xl leading-[1.03] font-medium sm:text-6xl lg:text-7xl"
          />
          <span id="cta-heading" className="sr-only">
            Your Wedding Story Deserves a Beautiful Beginning.
          </span>
          <Reveal delay={0.2}>
            <p className="max-w-md text-lg leading-relaxed text-ivory/85">
              Create an invitation that your guests will remember.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-3">
            <a href={createInvitationHref} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary + ' focus-visible:ring-offset-maroon'}>
              Create Your Invitation
            </a>
            <a
              href={whatsappLink('Hi Digital Invite, I have a few questions before I start.')}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles.outlineIvory}
            >
              Ask a question
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
