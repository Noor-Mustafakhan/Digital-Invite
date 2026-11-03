import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms for ordering a Digital Invite wedding invitation film.',
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These are placeholder terms. Replace them with your reviewed legal text before launch."
      sections={[
        {
          heading: 'Orders',
          body: 'An order is confirmed once we agree on your package, timeline and any deposit over WhatsApp or email.',
        },
        {
          heading: 'Revisions',
          body: 'You can request changes during the preview stage. The number of revision rounds depends on your package.',
        },
        {
          heading: 'Your content',
          body: 'You confirm you have the right to share any photos you send us. You keep ownership of your photos and your finished film.',
        },
        {
          heading: 'Delivery',
          body: 'Your finished invitation is delivered as an MP4 file for personal use and sharing with your guests.',
        },
      ]}
    />
  )
}
