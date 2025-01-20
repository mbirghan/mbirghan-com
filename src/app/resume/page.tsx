import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { resume, type Role } from '@/lib/resume'

function Role({ role }: { role: Role }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <div className="flex flex-row gap-4">
          <div>
            <Card.Title>
              {role.company} - {role.title}
            </Card.Title>
            <Card.Description>
              {role.description.map((description) => (
                <p key={description}>{description}</p>
              ))}
            </Card.Description>
          </div>
        </div>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={role.startDate}
        className="mt-1 hidden md:block"
      >
        <p>
          {role.startDate} - {role.endDate}
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
      title="Moritz Birghan - Software Engineer"
      intro="Passionate software engineer and startup founder based in Berlin. With over 8 years of professional experience, I thrive in team environments, love solving challenging problems, and am always eager to learn and improve."
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
