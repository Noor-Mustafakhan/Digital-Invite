'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ArchIcon } from '@/components/arch-frame'
import { navLinks } from '@/lib/content'
import { createInvitationHref } from '@/lib/config'
import { buttonStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

const sectionIds = navLinks.map((l) => l.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled ? 'border-gold/40 bg-ivory/85 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 rounded-sm text-ink focus-visible:ring-2 focus-visible:ring-rani focus-visible:outline-none">
          <ArchIcon className="h-7 w-6 text-rani" />
          <span className="font-serif text-2xl font-semibold tracking-tight">Digital Invite</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-sm px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-rani focus-visible:outline-none',
                    isActive ? 'text-rani' : 'text-ink/80 hover:text-ink',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-px origin-left bg-rani transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={createInvitationHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonStyles.primary, 'hidden px-5 py-2.5 sm:inline-flex')}
          >
            Create Invitation
          </a>

          <Sheet>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-sm text-ink hover:bg-parchment focus-visible:ring-2 focus-visible:ring-rani focus-visible:outline-none lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-gold/40 bg-ivory p-0">
              <div className="flex h-full flex-col gap-8 px-6 pt-16 pb-8">
                <SheetTitle className="flex items-center gap-2.5 font-serif text-2xl font-semibold text-ink">
                  <ArchIcon className="h-7 w-6 text-rani" />
                  Digital Invite
                </SheetTitle>
                <ul className="flex flex-col border-t border-gold/30">
                  {navLinks.map((link) => (
                    <li key={link.id} className="border-b border-gold/30">
                      <SheetClose
                        render={<a href={`#${link.id}`} />}
                        className={cn(
                          'block py-4 font-serif text-2xl transition-colors focus-visible:text-rani focus-visible:outline-none',
                          active === link.id ? 'text-rani' : 'text-ink',
                        )}
                      >
                        {link.label}
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <a
                  href={createInvitationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonStyles.primary, 'mt-auto w-full')}
                >
                  Create Invitation
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
