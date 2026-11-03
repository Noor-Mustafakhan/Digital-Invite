export const images = {
  hero: '/images/hero-couple.png',
  styleRealistic: '/images/style-realistic.png',
  style3d: '/images/style-3d.png',
  styleArtistic: '/images/style-artistic.png',
  transformSketch: '/images/transform-sketch.png',
  transformScene: '/images/transform-scene.png',
  transformAnimated: '/images/transform-animated.png',
  showcaseMehndi: '/images/showcase-mehndi.png',
  showcaseBaraat: '/images/showcase-baraat.png',
  showcaseNikah: '/images/showcase-nikah.png',
  showcaseWalima: '/images/showcase-walima.png',
  ctaArch: '/images/cta-arch.png',
} as const

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'styles', label: 'Explore Styles' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
] as const

export type StyleTheme = 'maroon' | 'marigold' | 'peacock'

export type CreativeStyle = {
  id: string
  title: string
  short: string
  description: string
  image: string
  alt: string
  theme: StyleTheme
  includes: string[]
}

export const creativeStyles: CreativeStyle[] = [
  {
    id: 'realistic',
    title: 'Realistic Wedding Films',
    short: 'Realistic',
    description: 'Photoreal scenes with natural skin, rich fabrics and cinematic light.',
    image: images.styleRealistic,
    alt: 'Photoreal South Asian couple in maroon and gold bridal wear in a candlelit palace courtyard',
    theme: 'maroon',
    includes: [
      'Photoreal couple scenes styled to your outfits and venue',
      'Cinematic lighting and film-graded colour',
      'Elegant serif titles with your names and event details',
      'Licensed music with smooth scene transitions',
    ],
  },
  {
    id: '3d',
    title: 'Cartoon & 3D Invitations',
    short: '3D Cartoon',
    description: 'Charming 3D characters of the two of you in a festive animated world.',
    image: images.style3d,
    alt: 'Stylised 3D bride and groom characters at a colourful mehndi celebration with marigold garlands',
    theme: 'marigold',
    includes: [
      'Stylised 3D bride and groom inspired by your look',
      'Festive animated environments for each event',
      'Playful motion, confetti and garland details',
      'Upbeat music and animated event cards',
    ],
  },
  {
    id: 'artistic',
    title: 'AI Artistic Invitations',
    short: 'AI Artistic',
    description: 'Dreamlike palaces, floating lanterns and painterly romantic light.',
    image: images.styleArtistic,
    alt: 'Painterly palace on still water at dusk with floating lanterns in teal and gold tones',
    theme: 'peacock',
    includes: [
      'Painterly fantasy scenes built around your theme',
      'Soft, romantic light with a hand-painted texture',
      'Poetic title cards for each wedding event',
      'Ambient score with gentle, flowing transitions',
    ],
  },
]

export const styleThemeClasses: Record<
  StyleTheme,
  { panel: string; tag: string; ring: string; label: string; button: string }
> = {
  maroon: {
    panel: 'bg-maroon text-ivory',
    tag: 'bg-maroon text-gold-light',
    ring: 'text-gold',
    label: 'text-gold-light',
    button: 'bg-ivory text-maroon hover:bg-gold-light',
  },
  marigold: {
    panel: 'bg-marigold text-ink',
    tag: 'bg-marigold text-ink',
    ring: 'text-rani',
    label: 'text-ink',
    button: 'bg-rani text-ivory hover:bg-rani-deep',
  },
  peacock: {
    panel: 'bg-peacock text-ivory',
    tag: 'bg-peacock text-gold-light',
    ring: 'text-gold-light',
    label: 'text-gold-light',
    button: 'bg-ivory text-peacock hover:bg-gold-light',
  },
}

export type ShowcaseItem = {
  id: string
  title: string
  description: string
  image: string
  alt: string
  styleTag: string
  theme: StyleTheme
  duration: string
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'walima',
    title: 'An Evening of White Florals',
    description: 'A candlelit walima walk-in, told in slow cinematic frames.',
    image: images.showcaseWalima,
    alt: 'Couple walking through a corridor of white flowers and candlelight',
    styleTag: 'Realistic',
    theme: 'maroon',
    duration: '~60 sec',
  },
  {
    id: 'baraat',
    title: 'The Baraat Arrives',
    description: 'A joyful 3D procession with dhol, fireworks and marigolds.',
    image: images.showcaseBaraat,
    alt: '3D animated groom on a decorated horse in a festive baraat procession',
    styleTag: '3D Cartoon',
    theme: 'marigold',
    duration: '~45 sec',
  },
  {
    id: 'nikah',
    title: 'Moonlit Garden Nikah',
    description: 'A painterly Mughal garden glowing with brass lanterns.',
    image: images.showcaseNikah,
    alt: 'Painterly moonlit Mughal garden with fountains and hanging lanterns',
    styleTag: 'AI Artistic',
    theme: 'peacock',
    duration: '~75 sec',
  },
  {
    id: 'mehndi',
    title: 'Mehndi Night Details',
    description: 'Close, tactile moments of henna, petals and laughter.',
    image: images.showcaseMehndi,
    alt: 'Hands with intricate henna holding marigold petals',
    styleTag: 'Realistic',
    theme: 'maroon',
    duration: '~30 sec',
  },
]

export const steps = [
  {
    title: 'Choose Your Style',
    description: 'Pick Realistic, 3D Cartoon or AI Artistic as the visual world for your film.',
  },
  {
    title: 'Add Your Details',
    description: 'Share names, dates, venue, events and any preferences, plus optional photos.',
  },
  {
    title: 'Let AI Create',
    description: 'AI builds personalised scenes and animation around your story.',
  },
  {
    title: 'Preview & Receive',
    description: 'Review your film, request changes, then receive your MP4 to share.',
  },
]

export const transformationStages = [
  { id: 'sketch', label: 'Sketch concept', image: images.transformSketch, alt: 'Pencil storyboard sketch of a couple under a Mughal arch' },
  { id: 'scene', label: 'AI scene', image: images.transformScene, alt: 'Rendered scene of the couple under a marigold-draped arch' },
  { id: 'animated', label: 'Animated frame', image: images.transformAnimated, alt: 'Final animated frame with petals, gold light and couple names' },
] as const

export const transformationPairs = [
  { id: 'sketch-scene', before: 0, after: 1 },
  { id: 'scene-animated', before: 1, after: 2 },
  { id: 'sketch-animated', before: 0, after: 2 },
] as const

export const pricingPlans = [
  {
    id: 'template',
    name: 'Template Invitation',
    summary: 'A beautiful start, ready quickly.',
    features: ['Pre-designed template', 'Personalised names and details', 'Music and transitions'],
    featured: false,
  },
  {
    id: 'enhanced',
    name: 'AI Enhanced',
    summary: 'Scenes created around your story.',
    features: ['Custom AI scenes', 'Personalised visuals', 'Automated editing', 'Custom text and music'],
    featured: true,
  },
  {
    id: 'premium',
    name: 'Cinematic Premium',
    summary: 'Our most detailed storytelling.',
    features: [
      'Multiple custom scenes',
      'Detailed storytelling',
      'Advanced effects',
      'Priority quality review',
    ],
    featured: false,
  },
]

export const faqs = [
  {
    q: 'How does Digital Invite work?',
    a: 'Choose a style, share your details and optional photos, and we create a personalised invitation film for you to preview.',
  },
  {
    q: 'Can I choose between a realistic or cartoon style?',
    a: 'Yes. Choose Realistic, 3D Cartoon or AI Artistic.',
  },
  {
    q: 'Can I upload photographs?',
    a: 'Yes, optionally. They help personalise scenes.',
  },
  {
    q: 'Can AI create personalised scenes?',
    a: 'Yes. Scenes are generated around your names, venue, theme and preferences.',
  },
  {
    q: 'How long does it take?',
    a: "Turnaround depends on the package. We'll confirm timelines when you enquire.",
  },
  {
    q: 'Can I request revisions?',
    a: 'Yes, you can request changes during the preview stage.',
  },
  {
    q: 'Which languages do you support?',
    a: 'English and Urdu at launch. Ask us about others.',
  },
  {
    q: 'What happens to my photos?',
    a: 'Photos are used only to create your invitation and are never shared publicly.',
  },
]
