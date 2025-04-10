import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { Button } from '@/components/Button'

import { resume, type Role } from '@/lib/resume'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Role({ role }: { role: Role }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <div className="flex flex-row gap-4">
          <div>
            <Card.Eyebrow
              as="time"
              dateTime={role.startDate}
              className="md:hidden"
              decorate
            >
              {role.startDate} - {role.endDate}
            </Card.Eyebrow>
            <Card.Title>
              {role.company} - {role.title}
            </Card.Title>
            <Card.Description>
              {role.description.map((description) => (
                <span key={description} className="block flex items-baseline">
                  <span className="mr-3">•</span>
                  {description}
                </span>
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

export const metadata: Metadata = {
  title: 'Resume',
  description: 'My work experience and skills.',
}

export default async function Resume() {
  return (
    <SimpleLayout
      title="Moritz Birghan - Software Engineer"
      intro="Passionate software engineer and startup founder based in Berlin. With over 8 years of professional experience, I thrive in team environments, love solving challenging problems, and am always eager to learn and improve."
      footer={
        <div className="flex flex-col gap-6 md:flex-row">
          <SocialLink href="mailto:mb@mbirghan.com" icon={MailIcon}>
            mb@mbirghan.com
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/moritz-birghan/"
            icon={LinkedInIcon}
          >
            linkedin.com/in/moritz-birghan
          </SocialLink>
          <SocialLink href="https://github.com/mbirghan" icon={GitHubIcon}>
            github.com/mbirghan
          </SocialLink>
        </div>
      }
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="mb-16"></div>
        <div className="flex max-w-3xl flex-col space-y-16">
          {resume.map((role) => (
            <Role key={role.company} role={role} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          {/* TODO: I should update the CV to be similar to the content here (on canva) */}
          <Button
            href="/Moritz-Birghan-CV.pdf"
            className="group flex w-full max-w-3xl items-center justify-center gap-3 px-6 py-3 text-base"
          >
            Download CV
            <ArrowDownIcon className="h-5 w-5 stroke-zinc-400 transition group-hover:stroke-zinc-600 dark:group-hover:stroke-zinc-300" />
          </Button>
        </div>
      </div>
    </SimpleLayout>
  )
}
