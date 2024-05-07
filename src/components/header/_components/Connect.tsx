import GithubSVG from '@/assets/icons/social/github.svg'
import LinkedInSVG from '@/assets/icons/social/linkedin.svg'
import TwitterSVG from '@/assets/icons/social/twitter.svg'

const Socials = () => {
  return (
    <div className="flex items-center gap-2">
      <a href="https://twitter.com/Zlvskyy" target="_blank" rel="noreferrer">
        <TwitterSVG width={16} height={16} className="dark:[&>path]:fill-white" />
      </a>
      <a href="https://github.com/Zlvsky" target="_blank" rel="noreferrer">
        <GithubSVG width={16} height={16} className="dark:[&>path]:fill-white" />
      </a>

      <a
        href="https://www.linkedin.com/in/krzysztof-zaleski02"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInSVG width={16} height={16} className="dark:[&>path]:fill-white" />
      </a>
    </div>
  )
}

function Connect() {
  return (
    <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
      <Socials />
    </div>
  )
}

export default Connect
