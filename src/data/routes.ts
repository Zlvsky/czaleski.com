import { GUMROAD_URL } from '@/utils/consts'

export const routes = [
  {
    href: '/',
    text: 'About'
  },
  {
    href: 'https://hireme.czaleski.com/',
    text: 'Hire'
  },
  {
    href: '/blog',
    text: 'Blog'
  },
  {
    href: GUMROAD_URL,
    text: 'Products'
  }
] as const
