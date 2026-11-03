'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

type LineRevealProps = {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  as?: 'h1' | 'h2'
  delay?: number
  animateOnMount?: boolean
}

export function LineReveal({
  lines,
  className,
  lineClassName,
  as = 'h2',
  delay = 0,
  animateOnMount = false,
}: LineRevealProps) {
  const reduce = useReducedMotion()
  const Tag = as

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          {reduce ? (
            <span className={`block ${lineClassName ?? ''}`}>{line}</span>
          ) : (
            <motion.span
              className={`block ${lineClassName ?? ''}`}
              initial={{ y: '105%' }}
              {...(animateOnMount
                ? { animate: { y: 0 } }
                : { whileInView: { y: 0 }, viewport: { once: true, margin: '-60px' } })}
              transition={{ duration: 0.85, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  )
}
