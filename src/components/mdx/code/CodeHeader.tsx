import { memo } from 'react'
// import CopyIcon from "../../../../public/icons/copy.svg";
// import DoneIcon from "../../../../public/icons/done.svg";
import Image from 'next/image'

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
    <header className="bg-darkBg2 flex w-full flex-row items-center justify-between rounded-t-xl">
      <div className="bg-secondary flex flex-row gap-1 rounded-tl-xl border-r border-black px-4 py-2">
        {icon && <Image src={icon} alt={title || ''} width={16} height={16} />}
        <p data-codetitle className="text-base">
          {title}
        </p>
      </div>

      <button className="p-2" onClick={onCopy}>
        <span className="visually-hidden">{isCopied ? 'Skopiowano' : 'Skopiuj'}</span>
        {/* {isCopied ? <DoneIcon /> : <CopyIcon />} */}
      </button>
    </header>
  )
})

CodeHeader.displayName = 'CodeHeader'
