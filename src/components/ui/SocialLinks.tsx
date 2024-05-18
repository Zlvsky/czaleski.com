import GithubSVG from '@/assets/icons/social/github.svg'
import LinkedInSVG from '@/assets/icons/social/linkedin.svg'
import TwitterSVG from '@/assets/icons/social/twitter.svg'
import { Button } from '@/components/ui/button/Button'
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

export const SocialLinks = () => {
  return (
    <div className="flex items-center ">
      {socialsData.map((el, index) => (
        <Button
          key={'header_social_' + index}
          variant={'icon'}
          size={'icon'}
          className="group"
        >
          <Link href={el.href} target="_blank" rel="noreferrer" className="border-b-0">
            <el.icon
              width={16}
              height={16}
              className="transition-colors dark:[&>path]:fill-white dark:group-hover:[&>path]:fill-black"
            />
          </Link>
        </Button>
      ))}
    </div>
  )
}
