import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { faqs } from '@/lib/content'
import { mailtoLink } from '@/lib/config'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-heading"
            align="left"
            eyebrow="05 — Questions"
            lines={[
              'Everything You',
              <span key="know">
                Need to <em className="text-rani">Know.</em>
              </span>,
            ]}
          />
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground">
              {"Can't find your answer? "}
              <a href={mailtoLink('Question about Digital Invite')} className="font-semibold text-rani underline underline-offset-4 hover:text-rani-deep">
                Email us
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion className="border-t border-gold/40">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-b border-gold/40">
                <AccordionTrigger className="py-5 font-serif text-xl font-medium text-ink hover:no-underline focus-visible:ring-rani/50 sm:text-2xl">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
