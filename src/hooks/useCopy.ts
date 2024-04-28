import copyToClipboard from 'copy-to-clipboard'
import { useEffect, useState } from 'react'

const useCopy = (text: string) => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return

    const timeout = setTimeout(() => {
      setCopied(false)
    }, 6000)

    return () => clearTimeout(timeout)
  }, [isCopied])

  const copy = () => {
    if (isCopied) return

    if (!text) throw new Error('Reference is null.')
    copyToClipboard(text || '')

    setCopied(true)
  }

  return { isCopied, setCopied, copy }
}

export default useCopy
