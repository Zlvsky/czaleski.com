import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import BigWrap from '@/components/layout/BigWrap'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import { Mdx } from '@/components/mdx/Mdx'
import Content from '@/components/mdx/content/Content'
import { getMetadata } from '@/lib/metadata'
import { getWorkBySlug } from '@/lib/posts'
import { IParamsSlug } from '@/types/generalTypes'

export async function generateMetadata({ params }: IParamsSlug) {
  const slug = params!.slug as string
  const { frontmatter } = await getWorkBySlug(slug)

  return getMetadata({
    title: frontmatter.title,
    description: frontmatter.excerpt,
    type: 'article',
    image: frontmatter.image
  })
}

async function WorkPage({ params: { slug } }: IParamsSlug) {
  const { transformedMdx, frontmatter } = await getWorkBySlug(slug)
  return (
    <PageWrap>
      <Header />
      <Container>
        <BigWrap>
          <Mdx type="WORK" frontmatter={frontmatter} slug={slug}>
            <Content content={transformedMdx} />
          </Mdx>
        </BigWrap>
      </Container>
      <Footer />
    </PageWrap>
  )
}

export default WorkPage
