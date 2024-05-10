import Link from 'next/link'
import { memo } from 'react'

interface ShareProps {
  readonly href: string
  readonly title: string
}

export const Share = memo<ShareProps>(({ href, title }) => (
  <div className="flex flex-row items-center gap-2">
    <Link
      rel="noreferrer noopener"
      target="_blank"
      href={`https://x.com/share?url=${href}&text=${title} -`}
    >
      Tweet about
    </Link>

    <Link
      rel="noreferrer noopener"
      target="_blank"
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}`}
    >
      Share on LinkedIn
    </Link>
  </div>
))

Share.displayName = 'Share'
