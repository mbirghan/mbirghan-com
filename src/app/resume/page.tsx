import { type Metadata } from 'next'
import Image, { type ImageProps } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoAmazon from '@/images/logos/amazon.svg'
import logoCzichos from '@/images/logos/czichos.svg'
import logoFirefox from '@/images/logos/firefox.svg'
import logoStayfriends from '@/images/logos/stayfriends.png'
import logoStealth from '@/images/logos/stealth.jpg'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string
  end: string
  description: string
}

// TODO: This should be the same as on the home page
// TODO: Add description to each role
let resume: Array<Role> = [
  {
    company: 'Stealth',
    title: 'Co-Founder',
    logo: logoStealth,
    start: '2024',
    end: 'Present',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    company: 'Amazon',
    title: 'Software Development Engineer',
    logo: logoAmazon,
    start: '2022',
    end: '2024',
    description: 'Software Development Engineer at Amazon',
  },
  {
    company: 'Mozilla',
    title: 'Software Engineer',
    logo: logoFirefox,
    start: '2019',
    end: '2022',
    description: 'Software Engineer at Mozilla',
  },
  {
    company: 'Stayfriends',
    title: 'Software Engineer (Working Student)',
    logo: logoStayfriends,
    start: '2018',
    end: '2019',
    description: 'Software Engineer (Working Student) at Stayfriends',
  },
  {
    company: 'czichos.net',
    title: 'Software Engineer (Working Student)',
    logo: logoCzichos,
    start: '2017',
    end: '2018',
    description: 'Software Engineer (Working Student) at czichos.net',
  },
]

// TODO: Make this prettier
function Role({ role }: { role: Role }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <div className="flex flex-row gap-4">
          <div>
            <Card.Title>
              {role.company} - {role.title}
            </Card.Title>
            <Card.Description>{role.description}</Card.Description>
          </div>
        </div>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={role.start}
        className="mt-1 hidden md:block"
      >
        <p>
          {role.start} - {role.end}
        </p>
        <div className="relative z-10 mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={role.logo}
            alt=""
            className="h-8 w-8 rounded-full"
            unoptimized
          />
        </div>
      </Card.Eyebrow>
    </div>
  )
}

// TODO: Should the paper I wrote live here or in the projects section?
export const metadata: Metadata = {
  title: 'Resume',
  description: 'My work experience and skills.',
}

export default async function Resume() {
  return (
    <SimpleLayout
      title="My work experience and skills."
      intro="My work experience and skills."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {resume.map((role) => (
            <Role key={role.company} role={role} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
