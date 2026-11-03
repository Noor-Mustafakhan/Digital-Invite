import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ArchIcon } from '@/components/arch-frame'
import { Footer } from '@/components/footer'
import { MehndiDivider } from '@/components/garland-divider'

type LegalPageProps = {
  title: string
  intro: string
  sections: { heading: string; body: string }[]
}

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-gold/40 bg-ivory">
        <div className="mx-auto flex h-18 max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5 rounded-sm text-ink focus-visible:ring-2 focus-visible:ring-rani focus-visible:outline-none">
            <ArchIcon className="h-7 w-6 text-rani" />
            <span className="font-serif text-2xl font-semibold">Digital Invite</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-ink/80 hover:text-ink focus-visible:ring-2 focus-visible:ring-rani focus-visible:outline-none">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back home
          </Link>
        </div>
      </header>
      <main className="bg-ivory py-20">
        <article className="mx-auto flex max-w-3xl flex-col gap-10 px-5 sm:px-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold-deep uppercase">Placeholder · Last updated 2026</p>
            <h1 className="font-serif text-5xl font-medium text-ink">{title}</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>
          </div>
          <MehndiDivider className="justify-start" />
          {sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="font-serif text-2xl font-medium text-ink">{s.heading}</h2>
              <p className="leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  )
}
