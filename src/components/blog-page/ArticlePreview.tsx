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
      <Link href={slug}>
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="flex flex-row items-center gap-3">
            <span>{category}</span>•<span>{readTime}</span>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default ArticlePreview
