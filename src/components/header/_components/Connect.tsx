import GithubSVG from '@/assets/icons/social/github.svg'
import LinkedInSVG from '@/assets/icons/social/linkedin.svg'
import TwitterSVG from '@/assets/icons/social/twitter.svg'

const Socials = () => {
  return (
    <div className="flex items-center gap-2">
      <a href="https://twitter.com/Zlvskyy" target="_blank" rel="noreferrer">
        <TwitterSVG width={16} height={16} />
      </a>
      <a href="https://github.com/Zlvsky" target="_blank" rel="noreferrer">
        <GithubSVG width={16} height={16} />
      </a>

      <a
        href="https://www.linkedin.com/in/krzysztof-zaleski02"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInSVG width={16} height={16} />
      </a>
    </div>
  )
}

const PingDot = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 duration-150"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green"></span>
    </span>
  )
}

const ConnectButton = () => (
  <a
    href="mailto:zlvsky@icloud.com"
    className="rounded-md bg-primary px-1 py-2 text-white"
  >
    <button className="flex flex-row items-center rounded-xl border border-grayE8 bg-white/50 px-4 py-3 transition-colors ease-in hover:bg-grayE8/40">
      <PingDot />
      <span className="ml-3 text-sm text-gray2">Send me an email</span>
    </button>
  </a>
)

function Connect() {
  return (
    <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
      <Socials />
      {/* <a className="text-sm tracking-tighter underline">twitter</a>
      <a className="text-sm tracking-tighter underline">github</a>
      <a className="text-sm tracking-tighter underline">linkedin</a>
      <a className="text-sm tracking-tighter underline">gumroad</a> */}
      {/* <ConnectButton /> */}
    </div>
  )
}

export default Connect
