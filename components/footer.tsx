import Link from 'next/link'
import { ArchIcon } from '@/components/arch-frame'
import { mailtoLink, siteConfig } from '@/lib/config'

const sectionLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#styles', label: 'Explore Styles' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#pricing', label: 'Pricing' },
]

const linkClass =
  'rounded-sm text-sm text-ivory/80 transition-colors hover:text-gold-light focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:outline-none'

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-sm flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 self-start rounded-sm focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:outline-none">
              <ArchIcon className="h-7 w-6 text-gold-light" />
              <span className="font-serif text-2xl font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/75">
              Personalised AI wedding invitation films, designed around your style and story.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer sections" className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-gold-light uppercase">Explore</p>
              <ul className="flex flex-col gap-2.5">
                {sectionLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer company" className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-gold-light uppercase">Studio</p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href={mailtoLink()} className={linkClass}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Instagram
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className={linkClass}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkClass}>
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-ivory/15 pt-6 text-xs text-ivory/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-serif text-sm italic">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
