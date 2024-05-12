import LinkSVG from '@/assets/icons/common/link2.svg'
import Link from 'next/link'

const links = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/zlvskyy'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Zlvsky'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/krzysztof-zaleski02/'
  },
  {
    name: 'Gumroad',
    link: 'https://products.czaleski.com/'
  },
  {
    name: 'Resume',
    link: 'https://drive.google.com/file/d/1qIPu8SZ8ihFguJIER_0vAFMAAvaN6JPJ/view'
  }
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="mx-auto mt-20 flex  max-w-2xl flex-col gap-4 py-10">
      <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-5 md:mt-0">
        {links.map((link, index) => (
          <Link
            key={'footer_link_' + index}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-1 text-xs uppercase tracking-tight text-gray7B transition-colors ease-in hover:text-black"
          >
            {link.name} <LinkSVG />
          </Link>
        ))}
      </div>
      <span className="text-center text-sm tracking-tight text-gray7B">
        © {year} Krzysztof Zaleski. All Rights Reserved.
      </span>
    </div>
  )
}

export default Footer
