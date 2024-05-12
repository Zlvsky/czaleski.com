'use client'

import { MDXRemote } from 'next-mdx-remote'
import { ImageProps } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Code } from '../code/Code'
import { PostHeading } from '../heading/Heading'
import { Image } from '../image/Image'

interface HeadingComponentProps {
  readonly children: string
}

const customMdxComponents = {
  pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
    return <Code {...props} />
  },
  h2: (props: HeadingComponentProps) => (
    <PostHeading headingTag="h2" {...props}></PostHeading>
  ),
  h3: (props: HeadingComponentProps) => (
    <PostHeading headingTag="h3" {...props}></PostHeading>
  ),
  h4: (props: HeadingComponentProps) => (
    <PostHeading headingTag="h4" {...props}></PostHeading>
  ),
  h5: (props: HeadingComponentProps) => (
    <PostHeading headingTag="h5" {...props}></PostHeading>
  ),
  h6: (props: HeadingComponentProps) => (
    <PostHeading headingTag="h6" {...props}></PostHeading>
  ),
  img: ({ alt, src }: ImageProps) => <Image src={src} alt={alt ? alt : ''} />,
  Image
}

function Content({ content }: any) {
  return <MDXRemote {...content} components={customMdxComponents} />
}

export default Content
