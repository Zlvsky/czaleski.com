import Link from 'next/link'
import { memo } from 'react'

interface EditProps {
  readonly href: string
}

export const Edit = memo<EditProps>(({ href }) => (
  <Link
    rel="noreferrer noopener"
    target="_blank"
    className="max-w-max"
    href={`https://github.com/Zlvsky/czaleski.com/tree/main/src/content${href}.mdx`}
  >
    Edit on Github
  </Link>
))

Edit.displayName = 'Edit'
