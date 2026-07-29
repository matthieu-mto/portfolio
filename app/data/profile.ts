/**
 * All page copy lives here. Every section renders from this file, so updating
 * the portfolio is a data edit rather than a template edit.
 *
 * Source: the CV uploaded to the design brief
 * (uploads/cv-en-matthieu-gregoristoussaint.pdf). English only, by design.
 */

export interface Role {
  /** Rendered as two lines in the date column. */
  from: string
  to: string
  title: string
  company: string
  /** Short qualifier after the company — sector, product, city. */
  context?: string
  points: string[]
}

export interface EarlyRole {
  org: string
  role: string
  period: string
  detail: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Language {
  name: string
  level: string
}

export interface Study {
  school: string
  detail: string
  period: string
}

export const profile = {
  name: 'Matthieu Gregoris Toussaint',
  kicker: 'Solutions Engineer · ex Full-Stack Developer',
  location: 'Vendôme, France — 45 min from Paris by TGV',
  email: 'matthieu.toussaint20@gmail.com',
  phone: '+33 6 36 30 91 00',
  linkedin: 'https://www.linkedin.com/in/matthieu-toussaint/',
  linkedinLabel: 'linkedin.com/in/matthieu-toussaint',
  github: 'https://github.com/matthieu-mto',
  githubLabel: 'github.com/matthieu-mto',

  /** The brief's poster statement — set at display size, no rewriting. */
  statement:
    'From 2019 to 2025, full-stack developer for SaaS products. Since 2025, solutions engineer.',

  /** The brief's tag row, in its original order. */
  tags: [
    'Vue.js',
    'TypeScript',
    'Laravel & Symfony',
    'API',
    'SSO',
    'Project management',
    'Technical demos',
    'Integrations',
    'Pre-sales',
  ],

  intro:
    "Former full-stack developer (6 years) turned Solutions Engineer. I own integration projects end to end — from scoping to go-live — and bridge clients' business needs and their technical translation. A developer's rigor with a customer-success mindset.",
} as const

export const roles: Role[] = [
  {
    from: 'Feb 2025',
    to: 'Present',
    title: 'Solutions Engineer',
    company: 'Rise Up',
    context: 'Paris · Learning SaaS (LMS/LXP)',
    points: [
      'Own technical projects end to end: scoping, functional & technical specifications, deployment, and go-live.',
      'Primary technical point of contact for 50+ clients in onboarding and 100+ accounts in run; track account health and adoption.',
      'Design and deploy connectors between Rise Up and client HRIS/TMS systems, standard and custom, working directly between engineering and clients.',
      'Automation: −50% time-consuming tasks, −90% requests to the system team. Level 3 support.',
    ],
  },
  {
    from: 'Dec 2023',
    to: 'Feb 2025',
    title: 'Full-Stack Developer',
    company: 'Rise Up',
    context: 'Paris',
    points: [
      'Vue.js front end, Symfony back end, DevOps and level 3 support.',
      'Promoted internally to Solutions Engineer.',
    ],
  },
  {
    from: 'Jun 2023',
    to: 'Dec 2023',
    title: 'Lead Developer',
    company: 'Mes Allocs',
    context: 'Paris',
    points: [
      'Managed a team of 3 developers, product prioritization and full-stack development.',
    ],
  },
  {
    from: 'May 2022',
    to: 'May 2023',
    title: 'Full-Stack Developer',
    company: 'Reed & Mackay France',
    context: 'Paris',
    points: [
      'Project management: rollout of an air-travel cost-optimization platform.',
    ],
  },
  {
    from: 'May 2020',
    to: 'Apr 2022',
    title: 'Full-Stack Developer',
    company: 'Vendredi',
    context: 'Paris · CSR engagement platform',
    points: [
      'SSO project management, technical rework and migrations; client onboarding and technical support; work with Product & Data.',
    ],
  },
]

export const earlyRoles: EarlyRole[] = [
  {
    org: 'MT Creative',
    role: 'Freelance consultant',
    period: '2016–2022',
    detail: 'Website creation & digital presence.',
  },
  {
    org: 'Taikonauten, Berlin',
    role: 'Full-stack developer',
    period: '2019',
    detail: 'Client projects, workshops & user interviews.',
  },
  {
    org: "Caisse d'Épargne",
    role: 'Client advisor',
    period: 'Summers 2016 & 2017',
    detail: 'Call-center relationship & sales.',
  },
  {
    org: 'Radio Fajet, Nancy',
    role: 'Radio host',
    period: '2012–2015',
    detail: 'Youth show.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Solutions & delivery',
    items: [
      'Scoping',
      'Specifications',
      'Deployment',
      'Go-live',
      'Account management',
      'Tier-3 support',
    ],
  },
  {
    label: 'Integrations',
    items: ['HRIS/TMS connectors', 'APIs', 'SSO'],
  },
  {
    label: 'Development',
    items: [
      'Vue.js',
      'Symfony',
      'Laravel',
      'JavaScript / TypeScript',
      'DevOps (AWS)',
    ],
  },
]

export const languages: Language[] = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'Basic' },
]

export const education: Study[] = [
  {
    school: 'HETIC',
    detail: 'Expert in digital communication engineering (EQF level 7)',
    period: '2016–2021',
  },
  {
    school: 'ESSCA',
    detail: 'Finance, marketing, management',
    period: '2015–2016',
  },
  {
    school: 'Lycée Saint Sigisbert',
    detail: 'Scientific baccalaureate, European German section',
    period: '2015',
  },
]

export const commitment = {
  label: 'Volunteer firefighter',
  org: 'SDIS 41',
  period: '1st-class firefighter · Jun 2024 – present',
  points: [
    'Trained in firefighting & rescue operations and pre-hospital emergency care (PSE1 certified).',
    'Composure, teamwork and stress management under real conditions.',
  ],
}
