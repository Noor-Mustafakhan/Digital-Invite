import { cn } from '@/lib/utils'

const SWAGS = 5
const DOTS_PER_SWAG = 14
const SAG = 18

const garlandDots = Array.from({ length: SWAGS * DOTS_PER_SWAG + 1 }, (_, i) => {
  const t = (i % DOTS_PER_SWAG) / DOTS_PER_SWAG
  const y = Math.sin(Math.PI * t) * SAG
  const isHook = i % DOTS_PER_SWAG === 0
  return { y: Math.round(y * 10) / 10, isHook, colour: i % 3 === 0 ? 'rani' : 'marigold' }
})

export function Garland({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none flex h-7 items-start justify-between', className)}>
      {garlandDots.map((dot, i) => (
        <span
          key={i}
          className={cn(
            'block shrink-0 rounded-full',
            dot.isHook ? 'size-2 bg-gold' : 'size-1.5',
            !dot.isHook && (dot.colour === 'rani' ? 'bg-rani' : 'bg-marigold'),
          )}
          style={{ transform: `translateY(${dot.y}px)` }}
        />
      ))}
    </div>
  )
}

export function MehndiDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('flex items-center justify-center gap-4 text-gold', className)}>
      <svg viewBox="0 0 160 12" className="h-3 w-24 sm:w-40" fill="none">
        <path d="M0 6c20-4 40 4 60 0s40-4 60 0 26 3 40 0" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="6" r="1.5" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 40 28" className="h-6 w-9" fill="none">
        <path
          d="M20 3c5 4 7 9 4.5 13.5C22.8 19.6 20 20 20 20s-2.8-.4-4.5-3.5C13 12 15 7 20 3Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M20 8c1.8 2 2.4 4.4 1.2 6.4-.5.9-1.2 1.4-1.2 1.4s-.7-.5-1.2-1.4C17.6 12.4 18.2 10 20 8Z" fill="currentColor" opacity=".5" />
        <path d="M6 20c3-1 6 0 8 3M34 20c-3-1-6 0-8 3" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="25" r="1.6" fill="currentColor" />
        <circle cx="4" cy="20" r="1.2" fill="currentColor" />
        <circle cx="36" cy="20" r="1.2" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 160 12" className="h-3 w-24 -scale-x-100 sm:w-40" fill="none">
        <path d="M0 6c20-4 40 4 60 0s40-4 60 0 26 3 40 0" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="6" r="1.5" fill="currentColor" />
      </svg>
    </div>
  )
}
