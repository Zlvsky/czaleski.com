import Image from 'next/image'
import Link from 'next/link'
import { memo, ReactNode } from 'react'
import slugify from 'slugify'

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
  readonly children: ReactNode
}

export const Mdx = memo<MdxProps>(({ frontmatter, children }) => {
  const { title, image, readingTime, category, publishedAt } = frontmatter
  console.log(frontmatter)
  const formattedReadingTime = `${Math.round(readingTime)} minutes`

  return (
    <article className="mx-auto mt-10 max-w-4xl text-white">
      <header className="" id="main">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div className="mt-5 flex flex-row items-center gap-2">
          <Link
            href={`/kategorie/${slugify(frontmatter.category, {
              lower: true
            })}`}
          >
            <span className="rounded-[40px] bg-primary px-3 py-1 font-medium uppercase text-white">
              {category}
            </span>
          </Link>
          <span>·</span>
          <span className="font-medium">
            {Math.round(readingTime)} {formattedReadingTime} czytania
          </span>
          <span>·</span>
          <span className="font-medium">{publishedAt}</span>
        </div>
        <div className="my-10">
          <Image width={900} height={450} src={image} alt={title} />
        </div>
        {/* <Info frontmatter={frontmatter} /> */}
      </header>
      <section
        aria-label="Rekomendowane artykuły, udostępnij i feedback"
        className="article w-full whitespace-pre-wrap md:text-lg xl:text-xl"
      >
        {children}
        {/* <Share /> */}
        {/* <Edit /> */}
      </section>
    </article>
  )
})

Mdx.displayName = 'Mdx'
