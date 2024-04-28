'use client'

import CheckSvg from '@/assets/icons/common/check.svg'
import CopySvg from '@/assets/icons/common/copy.svg'
import MailSvg from '@/assets/icons/common/email.svg'
import { personalData } from '@/data/personal'
import useCopy from '@/hooks/useCopy'
import { useEffect, useRef, useState } from 'react'

const PingDot = () => {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 duration-150"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green"></span>
    </span>
  )
}

function Contact() {
  const [type, setType] = useState<null | 'email' | 'copy'>(null)
  const timeout = useRef<any>(null)
  const { isCopied, copy } = useCopy(personalData.email)

  const handleSetType = (type: 'email' | 'copy') => {
    clearTimeout(timeout.current)
    setType(type)
  }

  const handleClearType = () => {
    timeout.current = setTimeout(() => {
      setType(null)
    }, 100)
  }

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setType(null)
    }, 100)
    return () => clearTimeout(timeout.current)
  }, [])

  return (
    <div className="mt-8 flex flex-col gap-2">
      <h3 className="flex flex-row items-center gap-1 text-sm text-[#555]">
        <PingDot /> Available for new challanges.
      </h3>
      <div className="flex flex-row items-center gap-3">
        <a
          href="mailto:zlvsky@icloud.com"
          className="border-input cursor-pointer rounded-md border p-2.5 transition-colors ease-linear hover:bg-accent active:scale-95"
          onMouseEnter={() => handleSetType('email')}
          onMouseLeave={handleClearType}
        >
          <MailSvg className="h-4 w-4" />
        </a>
        <div
          className="border-input cursor-pointer rounded-md border p-2.5 transition-colors ease-linear hover:bg-accent active:scale-95"
          onMouseEnter={() => handleSetType('copy')}
          onMouseLeave={handleClearType}
          onClick={copy}
        >
          {isCopied ? <CheckSvg className="h-4 w-4" /> : <CopySvg className="h-4 w-4" />}
        </div>
        <div className="flex flex-col text-sm text-[#555]">
          <span>Feel free to reach me out</span>
          {type === null ? (
            <span>Send me an email</span>
          ) : type === 'email' ? (
            <span className="font-semibold">Open in your mail app</span>
          ) : (
            <span className="font-semibold">Copy to clipboard</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
