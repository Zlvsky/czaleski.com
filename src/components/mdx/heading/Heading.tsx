import { cn } from '@/utils'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { memo } from 'react'
import slugify from 'slugify'

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps {
  readonly children: string
  readonly headingTag: HeadingVariant
}

const headingVariants = cva(
  'group mb-2 text-base font-medium text-[#111] dark:text-white',
  {
    variants: {
      Tag: {
        h1: 'text-2xl',
        h2: 'text-xl',
        h3: 'text-lg',
        h4: 'text-base',
        h5: 'text-base',
        h6: 'text-base'
      }
    }
  }
)

export const PostHeading = memo<HeadingProps>(({ headingTag: Tag, children }) => {
  const id = slugify(children, { lower: true })

  return (
    <Tag id={id} className={cn(headingVariants({ Tag }))}>
      <Link
        href={`#${id}`}
        id={id}
        aria-hidden="true"
        tabIndex={-1}
        className={
          'absolute -translate-x-6 border-0 px-2 opacity-0 transition-opacity group-hover:opacity-100'
        }
      >
        <span className={''}>#</span>
      </Link>
      {children}
    </Tag>
  )
})

PostHeading.displayName = 'PostHeading'
