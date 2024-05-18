import {
  GITHUB_URL,
  GUMROAD_URL,
  LINKEDIN_URL,
  RESUME_URL,
  TWITTER_URL
} from '@/utils/consts'

export const footerLinks = [
  {
    name: 'Twitter',
    link: TWITTER_URL
  },
  {
    name: 'GitHub',
    link: GITHUB_URL
  },
  {
    name: 'LinkedIn',
    link: LINKEDIN_URL
  },
  {
    name: 'Gumroad',
    link: GUMROAD_URL
  },
  {
    name: 'Resume',
    link: RESUME_URL
  }
] as const
