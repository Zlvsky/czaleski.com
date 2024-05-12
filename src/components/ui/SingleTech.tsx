import Link from 'next/link'

interface IProps {
  href: string
  name: string
  Icon: any
}

const SingleTech = ({ href, name, Icon }: IProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    >
      <Icon className="mr-1 h-4 w-4" />
      {name}
    </Link>
  )
}

export default SingleTech
