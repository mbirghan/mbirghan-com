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
    // TODO: This should be more detailed
    description: [
      'At Amazon Music, I developed model training and inference infrastructure while leading cross-team integration between multiple ML services.',
      'I designed and implemented a model monitoring service for both training and inference workflows.',
      'Through optimization efforts, I successfully reduced training infrastructure costs by 91%.',
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
      'As a key member of the Mozilla VPN team, I developed a cross-platform VPN application in C++ while taking ownership of the iOS codebase and other critical components.',
      'I led engineering teams on major projects and drove improvements to our development process through CI extensions.',
      'Since security and privacy were paramount, I implemented innovative solutions for data protection including methods to keep sensitive data on device.',
      'While working with the cryptography team I built a comprehensive testing framework for cryptographic algorithms, and developed certificate management tools.',
      'I also made contributions to Firefox by enhancing its certificate manager functionality.',
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
      'Implemented data management improvements for the server backend with Java and MongoDB.',
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
      `Developed an IoT controller for old injection molding machines using ESP8266 which allowd the machines to be controlled via a web portal.`,
      `Build and deployed physical servers and phones for VOIP telephony in addition to setting up and configuring the VOIP backend.`,
    ],
  },
]
