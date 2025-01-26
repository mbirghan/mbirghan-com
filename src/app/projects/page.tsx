import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { projects } from '@/lib/projects'
import { Project } from '@/components/Project'
import { GitHubActivity } from '@/components/GitHubActivity'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve build to help, learn or just enjoy coding."
      intro="I’ve worked on tons of little projects over the years with these being a small selection. Many of them are open-source, so if you see something that piques your interest, check out the code."
    >
      <div className="-mt-8 mb-12 md:-mt-12 md:mb-16">
        <GitHubActivity />
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
