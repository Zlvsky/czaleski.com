import Header from '@/components/header/Header'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import SmallWrap from '@/components/layout/SmallWrap'
import { Mdx } from '@/components/mdx/Mdx'
import { Code } from '@/components/mdx/code/Code'
import { Image } from '@/components/mdx/image/Image'
import SectionHeader from '@/components/ui/SectionHeader'
import { getMetadata } from '@/lib/metadata'
import { getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ImageProps } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

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

const customMdxComponents = {
  pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
    return <Code {...props} />
  },
  h2: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h2" {...getHeadingProps(props)}></SectionHeader>
  ),
  h3: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h3" {...getHeadingProps(props)}></SectionHeader>
  ),
  h4: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h4" {...getHeadingProps(props)}></SectionHeader>
  ),
  h5: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h5" {...getHeadingProps(props)}></SectionHeader>
  ),
  h6: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h6" {...getHeadingProps(props)}></SectionHeader>
  ),
  img: ({ alt, src }: ImageProps) => <Image src={src} alt={alt ? alt : ''} />,
  //   Sparkles,
  Image
  //   Highlight,
  //   Newsletter,
}

async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const { transformedMdx, frontmatter } = await getPostBySlug(slug)

  return (
    <PageWrap>
      <Header />
      <Container>
        <SmallWrap>
          <h1 className="mb-10 mt-2 flex flex-row items-center gap-1 text-xl font-normal tracking-tight">
            My Blog
          </h1>
          <Mdx frontmatter={frontmatter}>
            <MDXRemote {...transformedMdx} components={customMdxComponents} />
          </Mdx>
        </SmallWrap>
      </Container>
    </PageWrap>
  )
}

export default PostPage
