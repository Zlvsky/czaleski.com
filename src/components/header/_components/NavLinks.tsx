import Link from 'next/link'

interface ISingleLink {
  href: string
  text: string
}

const ahrefs = [
  // {
  //   href: '/about',
  //   text: 'About'
  // },
  {
    href: 'https://hireme.czaleski.com/',
    text: 'Hire'
  },
  {
    href: '/blog',
    text: 'Blog'
  },
  {
    href: 'https://products.czaleski.com/',
    text: 'Products'
  }
]

const SingleLink: React.FC<ISingleLink> = ({ href, text }) => {
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        className="text-sm text-gray2 dark:text-white/90"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <li className="cursor-pointer rounded-md bg-transparent px-1 py-1.5 transition-colors ease-in hover:bg-grayE8/40 dark:hover:bg-dark26 sm:px-2">
          {text}
        </li>
      </a>
    )
  }

  return (
    <Link href={href} className="text-sm text-gray2 dark:text-white/90">
      <li className="cursor-pointer rounded-md bg-transparent px-2 py-1.5 transition-colors ease-in hover:bg-grayE8/40 dark:hover:bg-dark26">
        {text}
      </li>
    </Link>
  )
}

const NavLinks = () => {
  return (
    <ul className="flex flex-row items-center gap-1 sm:gap-2">
      <Link href={'/'} className="text-sm text-gray2 dark:text-white/90 sm:hidden">
        <li className="cursor-pointer rounded-md bg-transparent px-2 py-1.5 transition-colors ease-in hover:bg-grayE8/40 dark:hover:bg-dark26">
          Home
        </li>
      </Link>
      {ahrefs.map((link, index) => (
        <SingleLink key={index} {...link} />
      ))}
    </ul>
  )
}

export default NavLinks
