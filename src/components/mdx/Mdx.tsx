import Image from 'next/image'
import { memo, ReactNode } from 'react'
import { Author } from '../blog/Author'
import { PostFooter } from './post-footer/PostFooter'

// @ts-ignore
// const Share = dynamic(() => import("./share/Share").then((c) => c.Share), {
//   ssr: false,
// });

// // @ts-ignore
// const Edit = dynamic(() => import("./edit/Edit").then((c) => c.Edit), {
//   ssr: false,
// });

type MdxProps = {
  readonly frontmatter: any
  readonly slug: string
  readonly children: ReactNode
}

export const Mdx = memo<MdxProps>(({ frontmatter, slug, children }) => {
  const { title, image, readingTime, category, publishedAt } = frontmatter
  const formattedReadingTime = `${Math.round(readingTime)} minutes`

  return (
    <article className="px-3">
      <header id="main">
        <h1 className="mt-2 flex flex-row items-center gap-1 text-xl font-normal tracking-tight">
          {title}
        </h1>
        <div className="mt-2 flex flex-row items-center gap-1 text-sm text-[#555] dark:text-[#a8a8a8]">
          <span>{category}</span>•<span>{formattedReadingTime}</span>•
          <span>{publishedAt}</span>
        </div>
        <div className="my-10">
          <Image width={768} height={300} src={image} alt={title} />
        </div>

        {/* <Info frontmatter={frontmatter} /> */}
      </header>
      <section className="article w-full  border-b pb-8 text-[#404040] dark:text-[#a8a8a8]">
        {children}
        <PostFooter resource={frontmatter} slug={slug} />
      </section>
      <Author />
    </article>
  )
})

Mdx.displayName = 'Mdx'
