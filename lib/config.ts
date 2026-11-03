export const siteConfig = {
  name: 'Digital Invite',
  tagline: 'Your Love Story. Beautifully Invited.',
  description:
    'Turn your wedding details into a personalised invitation film, designed around your style and story.',
  contactEmail: 'hello@digitalinvite.studio',
  whatsappNumber: '920000000000',
  instagramUrl: 'https://instagram.com/digitalinvite',
} as const

export function whatsappLink(message = 'Hi Digital Invite, I would like to create a wedding invitation film.') {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function mailtoLink(subject = 'Wedding invitation enquiry') {
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`
}

export const createInvitationHref = whatsappLink()
