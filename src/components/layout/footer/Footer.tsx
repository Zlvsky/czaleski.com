import { footerLinks } from '@/data/footerLinks'
import { NAME } from '@/utils/consts'
import Link from 'next/link'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="mx-auto mt-20 flex  max-w-2xl flex-col gap-4 py-10">
      <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-5 md:mt-0">
        {footerLinks.map((link, index) => (
          <Link
            key={'footer_link_' + index}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-1 text-sm uppercase tracking-tight text-gray7B transition-colors ease-in hover:text-black"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <span className="text-center text-sm tracking-tight text-gray7B">
        © {year} {NAME}.
      </span>
    </div>
  )
}

export default Footer
