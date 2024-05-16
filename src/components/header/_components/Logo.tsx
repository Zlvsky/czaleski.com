import { NAME, POSITION } from '@/utils/consts'
import Link from 'next/link'

function Logo() {
  return (
    <Link href={'/'} className="hidden items-center space-x-2 sm:flex">
      <div className="flex flex-col text-sm leading-none">
        <span className="text-lg font-bold tracking-tighter dark:text-white">{NAME}</span>
        <span>{POSITION}</span>
      </div>
    </Link>
  )
}

export default Logo
