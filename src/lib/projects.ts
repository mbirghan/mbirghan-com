export interface Project {
  name: string
  description: string
  link: { href: string; label: string }
}

export const projects: Project[] = [
  {
    name: 'Miv',
    description:
      'A terminal based text editor inspired by vim written in rust.',
    link: { href: 'https://github.com/mbirghan/miv', label: 'github.com' },
  },
  {
    name: 'Electomate',
    description:
      'A platform leveraging AI to provide accessible and reliable information on politics in and outside of elections. Contributed in collaboration with people from ETH Zurich and MIT.',
    link: {
      href: 'https://electomate.com/',
      label: 'electomate.com',
    },
  },
  {
    name: 'Mozill VPN',
    description:
      'A secure VPN client developed by Mozilla. I was part of the initial engineering team that helped bring this to life.',
    link: {
      href: 'https://github.com/mozilla-mobile/mozilla-vpn-client',
      label: 'github.com',
    },
  },
  {
    name: 'mbirghan.com',
    description:
      'This very website you are looking at. Built with Next.js and Tailwind CSS.',
    link: {
      href: 'https://github.com/mbirghan/mbirghan-com',
      label: 'github.com',
    },
  },
  {
    name: 'ScratchPad',
    description:
      'An open source Vim extension for quick note-taking and temporary text storage. Contributed by adding quality of life improvements.',
    link: {
      href: 'https://github.com/mbirghan/ScratchPad',
      label: 'github.com',
    },
  },
]
