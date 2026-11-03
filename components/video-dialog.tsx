'use client'

import Image from 'next/image'
import { Film } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { whatsappLink } from '@/lib/config'
import { buttonStyles } from '@/lib/styles'

type VideoDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  poster: string
  posterAlt: string
}

export function VideoDialog({ open, onOpenChange, title, poster, posterAlt }: VideoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 overflow-hidden rounded-md bg-ivory p-0 ring-1 ring-gold/40 sm:max-w-2xl">
        <div className="relative aspect-video w-full bg-ink">
          <Image src={poster} alt={posterAlt} fill sizes="(min-width: 640px) 672px, 100vw" className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-6 text-ivory">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-gold-light uppercase">
              <Film aria-hidden="true" className="size-4" />
              Sample film coming soon
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <DialogTitle className="font-serif text-3xl leading-tight font-medium text-ink">{title}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-muted-foreground">
            {"We're finishing our sample films. In the meantime, message us and we'll share concept frames for this style."}
          </DialogDescription>
          <div>
            <a
              href={whatsappLink(`Hi Digital Invite, I'd love to see a sample of "${title}".`)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles.primary}
            >
              Ask for a preview
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
