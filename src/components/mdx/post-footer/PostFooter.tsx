import { memo } from 'react'

import { HOST } from '@/utils/consts'

import { Edit } from './edit/Edit'
import { Share } from './share/Share'

interface IPostFooter {
  readonly resource: any
  readonly slug: string
}

export const PostFooter = memo<IPostFooter>(({ resource, slug }) => {
  const url = `${HOST}/blog/${slug}`

  return (
    <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <Share href={url} title={resource.title} />
      <Edit href={`/posts/${slug}`} />
    </div>
  )
})

PostFooter.displayName = 'PostFooter'
