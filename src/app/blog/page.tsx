import ArticlePreview from '@/components/blog-page/ArticlePreview'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import SmallWrap from '@/components/layout/SmallWrap'
import { getAllPosts } from '@/lib/posts'
import { Post } from '@/types/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <PageWrap>
      <Header />
      <Container>
        <SmallWrap id="main">
          <h1 className="mb-10 mt-2 flex flex-row items-center gap-1 text-xl font-normal tracking-tight">
            My Blog
          </h1>
          <ol className="flex flex-col  gap-10">
            {posts.map((post: Post) => (
              <ArticlePreview
                key={post.slug}
                title={post.title}
                description={post.excerpt}
                slug={post.slug}
                category={post.category}
                readTime={post.timeToRead}
              />
            ))}
          </ol>
        </SmallWrap>
      </Container>
      <Footer />
    </PageWrap>
  )
}
