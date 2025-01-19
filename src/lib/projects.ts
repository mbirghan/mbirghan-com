import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

export interface Project {
  name: string
  description: string
  link: { href: string; label: string }
  logo: any
}

export const projects: Project[] = [
  {
    name: 'Miv',
    description:
      'A terminal based text editor inspired by vim written in rust.',
    link: { href: 'https://github.com/mbirghan/miv', label: 'github.com' },
    logo: logoPlanetaria,
  },
  {
    name: 'mbirghan.com',
    description: 'My personal website built with Next.js and Tailwind CSS.',
    link: {
      href: 'https://github.com/mbirghan/mbirghan-com',
      label: 'github.com',
    },
    logo: logoAnimaginary,
  },
]
