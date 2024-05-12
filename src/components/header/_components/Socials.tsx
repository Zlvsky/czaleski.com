import GithubSVG from '@/assets/icons/social/github.svg'
import LinkedInSVG from '@/assets/icons/social/linkedin.svg'
import TwitterSVG from '@/assets/icons/social/twitter.svg'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/utils/consts'
import Link from 'next/link'

const socialsData = [
  {
    href: TWITTER_URL,
    icon: TwitterSVG
  },
  {
    href: GITHUB_URL,
    icon: GithubSVG
  },
  {
    href: LINKEDIN_URL,
    icon: LinkedInSVG
  }
]

export const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2">
      {socialsData.map((el, index) => (
        <Link
          href={el.href}
          target="_blank"
          rel="noreferrer"
          className="border-b-0"
          key={'header_social_' + index}
        >
          <el.icon width={16} height={16} className="dark:[&>path]:fill-white" />
        </Link>
      ))}
    </div>
  )
}

function Socials() {
  return (
    <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
      <SocialIcons />
    </div>
  )
}

export default Socials
