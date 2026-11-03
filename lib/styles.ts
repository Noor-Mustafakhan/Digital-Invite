import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rani focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0'

export const buttonStyles = {
  primary: cn(base, 'bg-rani text-ivory hover:bg-rani-deep'),
  outlineInk: cn(base, 'border border-ink/80 text-ink hover:bg-ink hover:text-ivory'),
  outlineIvory: cn(base, 'border border-ivory/80 text-ivory hover:bg-ivory hover:text-ink focus-visible:ring-ivory focus-visible:ring-offset-transparent'),
  ivory: cn(base, 'bg-ivory text-maroon hover:bg-gold-light focus-visible:ring-ivory focus-visible:ring-offset-transparent'),
}
