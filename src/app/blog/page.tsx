import ArticlePreview from '@/components/blog-page/ArticlePreview'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import BigWrap from '@/components/layout/BigWrap'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import SmallWrap from '@/components/layout/SmallWrap'
import { getAllPosts } from '@/lib/posts'
import { Post } from '@/types/posts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageWrap>
      <Header />
      <Container>
        <SmallWrap id="main">
          <span className="mt-2 flex flex-row items-center gap-1 text-xl font-normal tracking-tight">
            My Blog
          </span>
        </SmallWrap>
        <BigWrap id="work">
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
        </BigWrap>
      </Container>
      <Footer />
    </PageWrap>
  )
}
