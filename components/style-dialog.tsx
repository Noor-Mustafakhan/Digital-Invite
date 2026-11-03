'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { styleThemeClasses, type CreativeStyle } from '@/lib/content'
import { whatsappLink } from '@/lib/config'
import { buttonStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'

type StyleDialogProps = {
  style: CreativeStyle | null
  onOpenChange: (open: boolean) => void
}

export function StyleDialog({ style, onOpenChange }: StyleDialogProps) {
  const theme = style ? styleThemeClasses[style.theme] : null

  return (
    <Dialog open={style !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] gap-0 overflow-y-auto rounded-md bg-ivory p-0 ring-1 ring-gold/40 sm:max-w-3xl">
        {style && theme && (
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[26rem]">
              <Image src={style.image} alt={style.alt} fill sizes="(min-width: 640px) 384px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:p-8">
              <span className={cn('self-start rounded-[3px] px-2.5 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase', theme.tag)}>
                {style.short}
              </span>
              <DialogTitle className="font-serif text-3xl leading-tight font-medium text-ink">{style.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">{style.description}</DialogDescription>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-[0.24em] text-gold-deep uppercase">{"What's included"}</p>
                <ul className="flex flex-col gap-2.5">
                  {style.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-rani" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={whatsappLink(`Hi Digital Invite, I'd like to create an invitation in the ${style.title} style.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonStyles.primary, 'mt-auto')}
              >
                Create in this style
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
