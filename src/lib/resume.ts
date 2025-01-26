import { type ImageProps } from 'next/image'

import logoAmazon from '@/images/logos/amazon.svg'
import logoCzichos from '@/images/logos/czichos.svg'
import logoFirefox from '@/images/logos/firefox.svg'
import logoStayfriends from '@/images/logos/stayfriends.png'
import logoStealth from '@/images/logos/stealth.jpg'

export interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  startDate: string
  endDate: string
  startYear: string
  endYear: string
  description: string[]
}

// Get SVGs from https://svgrepo.com/
export const resume: Array<Role> = [
  {
    company: 'Stealth',
    title: 'Co-Founder',
    logo: logoStealth,
    startDate: 'Oct 2024',
    endDate: 'Present',
    startYear: '2024',
    endYear: 'Present',
    description: ['Building ...'],
  },
  {
    company: 'Amazon',
    title: 'Software Development Engineer',
    logo: logoAmazon,
    startDate: 'Jun 2022',
    endDate: 'Sep 2024',
    startYear: '2022',
    endYear: '2024',
    description: [
      'Led development of ML infrastructure at Amazon Music, focusing on model training pipelines and cross-service integration.',
      'Created comprehensive monitoring solutions for ML systems, covering both training and inference phases.',
      'Architected and deployed real-time model performance monitoring and alerting systems.',
      'Built end-to-end MLOps infrastructure including custom libraries, training pipelines, feature stores, and monitoring tools.',
      'Achieved 91% cost reduction in training infrastructure through strategic optimizations.',
    ],
  },
  {
    company: 'Mozilla',
    title: 'Software Engineer',
    logo: logoFirefox,
    startDate: 'Apr 2019',
    endDate: 'May 2022',
    startYear: '2019',
    endYear: '2022',
    description: [
      'Developed a cross-platform VPN application in C++ as a core member of the Mozilla VPN team, with primary responsibility for the iOS codebase.',
      'Led the work to enhance development workflows by implementing automated CI/CD improvements.',
      'Designed and built secure data protection systems focused on keeping sensitive information stored locally on user devices.',
      'Created an extensive testing framework for cryptographic algorithms and built certificate management tooling while collaborating with the cryptography team.',
      'Contributed to Firefox browser development by implementing improvements to certificate management capabilities.',
    ],
  },
  {
    company: 'Stayfriends',
    title: 'Software Engineer (Student Worker)',
    logo: logoStayfriends,
    startDate: 'Dec 2018',
    endDate: 'Mar 2019',
    startYear: '2018',
    endYear: '2019',
    description: [
      'Enhanced server-side data handling and storage systems using Java and MongoDB.',
    ],
  },
  {
    company: 'czichos.net',
    title: 'Software Engineer (Student Worker)',
    logo: logoCzichos,
    startDate: 'Jan 2017',
    endDate: 'Nov 2018',
    startYear: '2017',
    endYear: '2018',
    description: [
      'Designed and implemented IoT microcontrollers to modernize legacy injection molding machines with web-based control capabilities.',
      'Deployed complete VOIP telephony infrastructure including physical server setup, phone installation, and backend system configuration.',
    ],
  },
]
