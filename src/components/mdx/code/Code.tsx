import {
  DetailedHTMLProps,
  HTMLAttributes,
  isValidElement,
  useCallback,
  useRef
} from 'react'

import useCopy from '@/hooks/useCopy'
import { getLanguageIcon } from '@/utils'
import { CodeHeader } from './CodeHeader'

export const Code = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
) => {
  const preRef = useRef<HTMLPreElement | null>(null)
  const { isCopied, copy } = useCopy(preRef.current?.textContent)

  const getCodeTitle = useCallback(() => {
    if (isValidElement(props.children)) {
      const lang = props.className
      const programmingLang = lang?.split('-')[1]
      if (!programmingLang) return undefined
      return `index.${programmingLang}`
    }
    return undefined
  }, [props.children, props.className])

  const getCodeIcon = useCallback(() => {
    if (isValidElement(props.children)) {
      const lang = props.className
      const programmingLang = lang?.split('-')[1]
      if (!programmingLang) return undefined
      return getLanguageIcon(programmingLang)
    }
    return undefined
  }, [props.children, props.className])

  return (
    <article className="post-code my-12">
      <CodeHeader
        code={preRef.current?.textContent}
        onCopy={copy}
        isCopied={isCopied}
        className={props.className}
        title={getCodeTitle()}
        icon={getCodeIcon()}
      />
      <pre ref={preRef} {...props}>
        {isValidElement(props.children) && <code {...props.children.props} />}
      </pre>
    </article>
  )
}
