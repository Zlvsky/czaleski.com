import Header from '@/components/header/Header'
import BigWrap from '@/components/layout/BigWrap'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import { Mdx } from '@/components/mdx/Mdx'
import Content from '@/components/mdx/content/Content'
import { getMetadata } from '@/lib/metadata'
import { getPostBySlug } from '@/lib/posts'

export async function generateMetadata({ params }: any) {
  const slug = params!.slug as string
  const { frontmatter } = await getPostBySlug(slug)

  return getMetadata({
    title: frontmatter.title,
    description: frontmatter.excerpt,
    type: 'article',
    image: frontmatter.image
  })
}

async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const { transformedMdx, frontmatter } = await getPostBySlug(slug)
  return (
    <PageWrap>
      <Header />
      <Container>
        <BigWrap>
          <Mdx frontmatter={frontmatter}>
            <Content content={transformedMdx} />
          </Mdx>
        </BigWrap>
      </Container>
    </PageWrap>
  )
}

export default PostPage
