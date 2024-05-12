import Link from 'next/link'

interface IProps {
  title: string
  description: string
  slug: string
  category: string
  readTime: number
}

function ArticlePreview({ title, description, slug, category, readTime }: IProps) {
  return (
    <li className="">
      <Link href={`/blog/${slug}`}>
        <article>
          <h2 className="mb-2 text-base font-medium text-[#111] dark:text-white">
            {title}
          </h2>
          <p className="text-grayText1 dark:text-grayText2">{description}</p>
          <div className="mt-2 flex flex-row items-center gap-1 text-sm text-grayText1 dark:text-grayText2">
            <span>{category}</span>•<span>{Math.round(readTime)} minutes</span>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default ArticlePreview
