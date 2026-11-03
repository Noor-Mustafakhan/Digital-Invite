import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const ARCH_PATH =
  'M0,1 L0,0.34 C0,0.2 0.18,0.12 0.32,0.07 C0.42,0.035 0.47,0.02 0.5,0 C0.53,0.02 0.58,0.035 0.68,0.07 C0.82,0.12 1,0.2 1,0.34 L1,1 Z'

export function ArchDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <clipPath id="jharokha-arch" clipPathUnits="objectBoundingBox">
          <path d={ARCH_PATH} />
        </clipPath>
      </defs>
    </svg>
  )
}

function ArchOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn('pointer-events-none absolute overflow-visible', className)}
    >
      <path d={ARCH_PATH} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

type ArchFrameProps = {
  children: ReactNode
  className?: string
  outlineClassName?: string
  outline?: boolean
}

export function ArchFrame({ children, className, outlineClassName, outline = true }: ArchFrameProps) {
  return (
    <div className={cn('relative', className)}>
      {outline && <ArchOutline className={cn('-inset-2.5 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] text-gold', outlineClassName)} />}
      <div className="relative h-full w-full overflow-hidden" style={{ clipPath: 'url(#jharokha-arch)' }}>
        {children}
      </div>
    </div>
  )
}

export function ArchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" aria-hidden="true" className={className} fill="none">
      <path
        d="M2 27V10.5C2 7 6.5 4.8 9.5 3.6 11 3 11.7 2.4 12 1.5c.3.9 1 1.5 2.5 2.1C17.5 4.8 22 7 22 10.5V27"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M6 27V12.5c0-2 2.6-3.5 4.4-4.3.8-.3 1.3-.7 1.6-1.3.3.6.8 1 1.6 1.3 1.8.8 4.4 2.3 4.4 4.3V27" stroke="currentColor" strokeWidth="1" opacity=".6" />
      <path d="M1 27h22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
