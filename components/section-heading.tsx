import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LineReveal, Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  lines: ReactNode[]
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  id?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  lines,
  description,
  align = 'center',
  tone = 'light',
  id,
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('flex flex-col gap-5', align === 'center' ? 'items-center text-center' : 'items-start', className)}>
      <Reveal>
        <p className={cn('text-xs font-semibold tracking-[0.28em] uppercase', dark ? 'text-gold-light' : 'text-gold-deep')}>
          {eyebrow}
        </p>
      </Reveal>
      <div id={id}>
        <LineReveal
          lines={lines}
          className={cn(
            'font-serif text-4xl leading-[1.05] font-medium text-balance sm:text-5xl lg:text-6xl',
            dark ? 'text-ivory' : 'text-ink',
          )}
        />
      </div>
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              'max-w-xl text-base leading-relaxed text-pretty sm:text-lg',
              dark ? 'text-ivory/85' : 'text-muted-foreground',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
