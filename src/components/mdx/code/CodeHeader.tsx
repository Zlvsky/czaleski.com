import CheckSvg from '@/assets/icons/common/check.svg'
import CopySvg from '@/assets/icons/common/copy.svg'
import Image from 'next/image'
import { memo } from 'react'

type CodeHeaderProps = {
  isCopied: boolean
  className: string | undefined
  onCopy: () => void
  code: string | null | undefined
  title: string | undefined
  icon: string | undefined
}

export const CodeHeader = memo<CodeHeaderProps>(({ onCopy, isCopied, title, icon }) => {
  return (
    <header className="flex w-full flex-row items-center justify-between border-b bg-[#FAFAFA] px-4 dark:border-dark48 dark:bg-dark26">
      <div className="bg-secondary flex flex-row gap-1 border-black">
        {icon && <Image src={icon} alt={title || ''} width={16} height={16} />}
        <p data-codetitle className="text-sm text-[#666] dark:text-[#c0c0c0]">
          {title}
        </p>
      </div>

      <button className="" onClick={onCopy}>
        <span className="visually-hidden">
          {isCopied ? <CheckSvg className="h-4 w-4" /> : <CopySvg className="h-4 w-4" />}
        </span>
      </button>
    </header>
  )
})

CodeHeader.displayName = 'CodeHeader'
