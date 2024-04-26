interface ISingleLink {
  href: string
  text: string
}

const ahrefs = [
  {
    href: 'https://drive.google.com/file/d/1qIPu8SZ8ihFguJIER_0vAFMAAvaN6JPJ/view',
    text: 'About'
  },
  {
    href: 'https://drive.google.com/file/d/1qIPu8SZ8ihFguJIER_0vAFMAAvaN6JPJ/view',
    text: 'Blog'
  },
  {
    href: 'https://drive.google.com/file/d/1qIPu8SZ8ihFguJIER_0vAFMAAvaN6JPJ/view',
    text: 'Resume'
  },
  {
    href: 'https://czaleski.gumroad.com/',
    text: 'Gumroad'
  }
]

const SingleLink: React.FC<ISingleLink> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-sm text-gray2"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <li className="cursor-pointer rounded-md bg-transparent px-2 py-1.5 transition-colors ease-in hover:bg-grayE8/40">
        {text}
      </li>
    </a>
  )
}

const NavLinks = () => {
  return (
    <ul className="hidden flex-row items-center gap-2 lg:flex">
      {ahrefs.map((link, index) => (
        <SingleLink key={index} {...link} />
      ))}
    </ul>
  )
}

export default NavLinks
