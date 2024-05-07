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

const LocalTime = () => {
  const [localTime, setLocalTime] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const options = {
        hour: 'numeric' as const,
        minute: 'numeric' as const,
        hour12: true,
        timeZone: 'Europe/Warsaw'
      }
      const formatter = new Intl.DateTimeFormat('en-US', options)
      const formattedTime = formatter.format(now)
      setLocalTime(formattedTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="text-sm text-[#555] dark:text-[#a8a8a8]">
      Poland, local time: {localTime}
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
      <h3 className="flex flex-row items-center gap-1 text-sm text-[#555] dark:text-[#a8a8a8]">
        <PingDot /> Available for new challanges.
      </h3>
      <div className="flex flex-row items-center gap-3">
        <a
          href="mailto:zlvsky@icloud.com"
          className="border-input cursor-pointer rounded-md border border-black p-2.5 transition-colors ease-linear hover:bg-accent active:scale-95 dark:border-dark48"
          onMouseEnter={() => handleSetType('email')}
          onMouseLeave={handleClearType}
        >
          <MailSvg className="h-4 w-4" />
        </a>
        <div
          className="border-input cursor-pointer rounded-md border border-black p-2.5 transition-colors ease-linear hover:bg-accent active:scale-95 dark:border-dark48"
          onMouseEnter={() => handleSetType('copy')}
          onMouseLeave={handleClearType}
          onClick={copy}
        >
          {isCopied ? <CheckSvg className="h-4 w-4" /> : <CopySvg className="h-4 w-4" />}
        </div>
        <div className="flex flex-col text-sm text-[#555] dark:text-[#a8a8a8]">
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
      <LocalTime />
    </div>
  )
}

export default Contact
