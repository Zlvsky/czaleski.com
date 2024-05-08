type Frontmatter = {
  title: string
  excerpt: string
}

export type PostFrontmatter = {
  category: string
  publishedAt: string
  popular: boolean
  isPublished: boolean
  image: string
  readingTime: number
} & Frontmatter

export type Post = {
  title: string
  category: string
  excerpt: string
  slug: string
  publishedAt: string
  popular: boolean
  isPublished: boolean
  image: string
  timeToRead: number
}

export type Category = {
  title: string
  path: string
}
