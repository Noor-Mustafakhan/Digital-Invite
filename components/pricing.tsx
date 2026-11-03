import { Check, MessageCircle } from 'lucide-react'
import { MehndiDivider } from '@/components/garland-divider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { pricingPlans } from '@/lib/content'
import { whatsappLink } from '@/lib/config'
import { buttonStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 sm:px-8">
        <SectionHeading
          id="pricing-heading"
          eyebrow="04 — Packages"
          lines={[
            'Choose Your Invitation',
            <em key="experience" className="text-rani">
              Experience.
            </em>,
          ]}
          description="Every package is personalised to your names, events and story."
        />

        <ul className="grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <li key={plan.id}>
              <Reveal delay={i * 0.1} className="h-full">
                <article
                  className={cn(
                    'relative flex h-full flex-col gap-6 rounded-md bg-ivory p-7 ring-1 sm:p-8',
                    plan.featured ? 'border-t-4 border-rani shadow-xl shadow-maroon/10 ring-rani/30' : 'ring-gold/40',
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3.5 right-6 rounded-[3px] bg-rani px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-ivory uppercase">
                      Most popular
                    </span>
                  )}
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold tracking-[0.24em] text-gold-deep uppercase">Package 0{i + 1}</p>
                    <h3 className="font-serif text-3xl leading-tight font-medium text-ink">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.summary}</p>
                  </div>

                  <div className="border-y border-gold/30 py-5">
                    <p className="font-serif text-2xl text-ink italic">Pricing coming soon</p>
                  </div>

                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-relaxed text-ink">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-rani" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Hi Digital Invite, I'm interested in the ${plan.name} package.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(plan.featured ? buttonStyles.primary : buttonStyles.outlineInk, 'w-full')}
                  >
                    <MessageCircle aria-hidden="true" />
                    Enquire on WhatsApp
                    <span className="sr-only"> about {plan.name}</span>
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <MehndiDivider />
      </div>
    </section>
  )
}
