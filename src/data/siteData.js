// ────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here, no need to touch components
// ────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Creative Crew',
  tagline: 'Let\'s build something unforgettable.',
  email: 'hello@creativecrew.studio',
  phone: '+91 123 456 7890',
  location: 'Remote-first · San Francisco · Berlin',
  hours: 'Mon–Sat · 8am–7pm PT',
}

// Top nav + footer both read from this so links always match routes
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'NCF Funnels', to: '/services' },
      { label: 'Social Marketing', to: '/services' },
      { label: 'Web Development', to: '/services' },
      { label: 'LMS & POS', to: '/services' },
      { label: 'Branding & Video', to: '/services' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

export const trustedBrands = [
  'NovaCorp', 'Lumos', 'Arcadia', 'Zenith', 'Orbit', 'Kairos', 'Helix', 'Meridian',
]

export const capabilities = [
  {
    icon: 'Rocket',
    title: 'Funnel Marketing',
    desc: 'High-converting sales funnels engineered end-to-end.',
  },
  {
    icon: 'Share2',
    title: 'Social Media Management',
    desc: 'Content, ads, and community that compound.',
  },
  {
    icon: 'Globe',
    title: 'Website Development',
    desc: 'Editorial-grade websites built for scale.',
  },
  {
    icon: 'Code2',
    title: 'Software Development',
    desc: 'Flexible content systems your team can actually manage.',
  },
]


export const stats = [
  { value: '250+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '5+', label: 'Years of craft' },
  { value: '24/7', label: 'Dedicated support' },
]

export const processSteps = [
  { n: "01", title: "Explore", desc: "Deep dive into your goals, users, and unfair advantages.", accent: "from-violet-500 to-fuchsia-500", lottie: "https://lottie.host/76bd5d4d-0d46-4515-8cc1-0819492469df/AHrXtcpk4H.lottie" },
  { n: "02", title: "Strategy", desc: "Positioning, funnels, KPIs — the master plan.", accent: "from-indigo-500 to-violet-500", lottie: "https://lottie.host/ecdad5e9-0856-4562-90cc-53597f00807b/Di4rkinwxG.lottie" },
  { n: "03", title: "Design, Development", desc: "Fast, scalable, production-grade builds.", accent: "from-blue-500 to-violet-500", lottie: "https://lottie.host/f94b1858-6da9-4659-8e58-886a73c45363/s9v42HEscb.lottie" },
  { n: "04", title: "Launch", desc: "A polished go-live your customers remember.", accent: "from-violet-500 to-purple-500", lottie: "https://lottie.host/4117192c-b817-4d64-8f12-35126a0db0e7/BYtrKA44hI.lottie" },
  { n: "05", title: "Growth", desc: "Iterate, optimize, compound — every week.", accent: "from-fuchsia-500 to-rose-500", lottie: "https://lottie.host/18b0c990-dc30-4c7c-b7c2-96db80cb9925/bjGxJFBwPi.json"
   },
]

export const services = [
  {
    n: '01', icon: 'Rocket', title: 'NCF Funnel Development',
    tagline: 'Funnels that convert while you sleep.',
    desc: 'Neuro-conversion frameworks engineered around your customer journey.',
    features: ['Landing pages', 'Lead magnets', 'Email flows', 'Retargeting'],
    stack: ['Next.js', 'Klaviyo', 'Meta Ads', 'GA4'],
    price: 'From $6.5k',
  },
  {
    n: '02', icon: 'Share2', title: 'Social Media Marketing',
    tagline: 'Content that stops scrolls and starts revenue.',
    desc: 'End-to-end social — from creative to paid to community.',
    features: ['Content calendar', 'Reels & shorts', 'Paid ads', 'Community mgmt'],
    stack: ['Meta', 'TikTok', 'YouTube', 'LinkedIn'],
    price: 'From $3.5k/mo',
  },
  {
    n: '03', icon: 'Globe', title: 'Website Development',
    tagline: 'Editorial-grade websites that scale.',
    desc: 'Design-led, performance-obsessed, SEO-ready builds.',
    features: ['Design system', 'CMS', 'SEO', 'Analytics'],
    stack: ['Next.js', 'Sanity', 'Vercel', 'Framer Motion'],
    price: 'From $8k',
  },
  {
    n: '04', icon: 'Code2', title: 'Software Development',
    tagline: 'Custom apps built to last.',
    desc: 'Dashboards, portals, automation — production-grade.',
    features: ['Architecture', 'Auth & RBAC', 'APIs', 'Integrations'],
    stack: ['Node', 'Postgres', 'Next.js', 'AWS'],
    price: 'From $15k',
  },
]

export const faqs = [
  { q: 'How long does a typical project take?', a: 'Most engagements run 4–10 weeks depending on scope, from discovery through launch. We share a clear timeline before kickoff so there are no surprises.' },
  { q: 'Do you offer retainers?', a: 'Yes — many clients move to a monthly retainer after their first project for ongoing marketing, development, or growth work.' },
  { q: 'Which industries do you serve?', a: 'We work primarily with ambitious consumer, SaaS, and retail brands, but our systems adapt well to most industries.' },
  { q: 'Where are you based?', a: 'We\'re a remote-first team with hubs in San Francisco and Berlin, working with clients across time zones.' },
  { q: 'How do we start?', a: 'Book a free strategy call. We\'ll audit your current funnel or brand and share concrete next steps — no obligation.' },
]

export const testimonials = [
  { quote: 'Creative Crew rebuilt our funnel in 30 days. Revenue doubled the next quarter.', name: 'Sarah Chen', role: 'CEO, Nova Retail' },
  { quote: 'The most obsessive design team I have ever worked with. Every pixel matters.', name: 'Marcus Weill', role: 'Founder, Orbit Studios' },
  { quote: 'They shipped a POS and LMS that our team actually enjoys using. Rare.', name: 'Priya Nair', role: 'COO, Kairos' },
  { quote: 'Best-in-class creative + hard-nosed performance. This is our long-term partner.', name: 'Dan Sokolov', role: 'CMO, Helix Media' },
]

export const portfolioItems = [
  { title: 'Post Website', category: 'Software', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { title: 'LMS Platforms', category: 'Web', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80' },
  { title: 'Social media mangment', category: 'Graphic Design', img: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80' },
  { title: 'Funnel Marketing', category: 'Video Editing', img: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80' },
  { title: 'Meridian NCF Funnel', category: 'Web', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80' },
  { title: 'Nova Campaign Film', category: 'Video Editing', img: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80' },
  { title: 'Quanta Analytics UI', category: 'Software', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { title: 'Velvet Poster Series', category: 'Graphic Design', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80' },
]

export const filterCategories = ['All', 'Marketing', 'Social Media','Software', 'Web' ]

export const teamMembers = [
  { name: 'Aarav Mehta', role: 'Founder & Creative Director', img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80' },
  { name: 'Elena Rossi', role: 'Head of Strategy', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Kenji Watanabe', role: 'Lead Engineer', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
  { name: 'Zara Ali', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
]

export const timeline = [
  { year: '2020', title: 'Founded', desc: 'Started as two designers in a tiny studio.' },
  { year: '2021', title: 'First $1M project', desc: 'Delivered a nationwide launch for a retail brand.' },
  { year: '2023', title: 'Global team', desc: 'Grew into a distributed team across 3 continents.' },
  { year: '2025', title: 'Creative Crew', desc: 'Rebranded and doubled down on premium craft.' },
]

export const values = [
  { n: '01', title: 'Craft over quantity', desc: 'We only take on projects we believe we can make world-class.' },
  { n: '02', title: 'Outcomes, not outputs', desc: 'Deliverables are a means. Growth is the goal.' },
  { n: '03', title: 'Radical transparency', desc: 'Weekly demos, open Slack, no surprises.' },
  { n: '04', title: 'Compound over time', desc: 'We build partnerships, not one-off engagements.' },
]

export const budgetOptions = ['< $5k', '5-10k', '10-25k', '25-50k', '50k+']
