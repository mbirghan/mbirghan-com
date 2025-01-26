'use client'

import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

export function GitHubActivity() {
  const { resolvedTheme } = useTheme()

  return (
    <GitHubCalendar
      colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      username="mbirghan"
      year={new Date().getFullYear()}
    />
  )
}
