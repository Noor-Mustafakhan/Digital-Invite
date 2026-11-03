'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { ChevronsLeftRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { transformationPairs, transformationStages } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Transformation() {
  const [pairIndex, setPairIndex] = useState(0)
  const [position, setPosition] = useState(50)
  const sliderId = useId()

  const pair = transformationPairs[pairIndex]
  const before = transformationStages[pair.before]
  const after = transformationStages[pair.after]

  function onTabKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' ? 1 : -1
    const next = (pairIndex + dir + transformationPairs.length) % transformationPairs.length
    setPairIndex(next)
    document.getElementById(`${sliderId}-tab-${next}`)?.focus()
  }

  return (
    <section aria-labelledby="transform-heading" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 sm:px-8">
        <SectionHeading
          id="transform-heading"
          eyebrow="03 — The creative process"
          lines={[
            'From a Vision to',
            <>
              Your <em className="text-rani">Wedding Film.</em>
            </>,
          ]}
        />

        <Reveal className="flex flex-col gap-6">
          <div role="tablist" aria-label="Compare stages" className="mx-auto flex flex-wrap justify-center gap-2">
            {transformationPairs.map((p, i) => {
              const selected = i === pairIndex
              return (
                <button
                  key={p.id}
                  id={`${sliderId}-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${sliderId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setPairIndex(i)}
                  onKeyDown={onTabKeyDown}
                  className={cn(
                    'rounded-[3px] border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-rani focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none',
                    selected ? 'border-ink bg-ink text-ivory' : 'border-gold/50 text-ink hover:border-ink',
                  )}
                >
                  {transformationStages[p.before].label}
                  <span aria-hidden="true"> → </span>
                  <span className="sr-only"> to </span>
                  {transformationStages[p.after].label}
                </button>
              )
            })}
          </div>

          <div
            id={`${sliderId}-panel`}
            role="tabpanel"
            aria-labelledby={`${sliderId}-tab-${pairIndex}`}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-parchment ring-1 ring-gold/40 select-none sm:aspect-[16/10]"
          >
            <Image src={after.image} alt={after.alt} fill sizes="(min-width: 1152px) 1088px, 95vw" className="object-cover" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              <Image src={before.image} alt={before.alt} fill sizes="(min-width: 1152px) 1088px, 95vw" className="object-cover" />
            </div>

            <span className="absolute top-4 left-4 rounded-[3px] bg-ink/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-ivory uppercase backdrop-blur">
              {before.label}
            </span>
            <span className="absolute top-4 right-4 rounded-[3px] bg-rani px-2.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-ivory uppercase">
              {after.label}
            </span>

            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-ivory shadow-[0_0_0_1px_rgba(31,26,36,0.15)]" style={{ left: `${position}%` }}>
              <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[3px] border border-gold bg-ivory text-ink shadow-lg">
                <ChevronsLeftRight className="size-5" />
              </span>
            </div>

            <label htmlFor={`${sliderId}-range`} className="sr-only">
              Reveal amount between {before.label} and {after.label}
            </label>
            <input
              id={`${sliderId}-range`}
              type="range"
              min={0}
              max={100}
              step={1}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              aria-valuetext={`${position}% ${before.label}`}
              className="peer absolute inset-0 h-full w-full cursor-ew-resize appearance-none opacity-0"
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md ring-rani ring-inset peer-focus-visible:ring-2" />
          </div>

          <p className="text-center text-sm text-muted-foreground italic">Illustrative example of the creative process.</p>
        </Reveal>
      </div>
    </section>
  )
}
