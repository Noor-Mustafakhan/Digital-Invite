import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Digital Invite handles your wedding details and photos.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This is a placeholder policy. Replace it with your reviewed legal text before launch."
      sections={[
        {
          heading: 'What we collect',
          body: 'Names, wedding dates, venue and event details, contact information and any photos you choose to share for your invitation.',
        },
        {
          heading: 'How we use it',
          body: 'Your details and photos are used only to create and deliver your invitation film. They are never shared publicly or sold.',
        },
        {
          heading: 'Retention',
          body: 'We keep your materials only as long as needed to complete your order and any revisions. You can ask us to delete them at any time.',
        },
        {
          heading: 'Contact',
          body: 'For privacy questions, email us using the Contact link in the footer.',
        },
      ]}
    />
  )
}
