'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import { MDXRemote } from 'next-mdx-remote'
import { ImageProps } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Code } from '../code/Code'
import { Image } from '../image/Image'

interface HeadingComponentProps {
  readonly children: string
}

const customMdxComponents = {
  pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
    return <Code {...props} />
  },
  h2: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h2" {...props}></SectionHeader>
  ),
  h3: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h3" {...props}></SectionHeader>
  ),
  h4: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h4" {...props}></SectionHeader>
  ),
  h5: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h5" {...props}></SectionHeader>
  ),
  h6: (props: HeadingComponentProps) => (
    <SectionHeader headingTag="h6" {...props}></SectionHeader>
  ),
  img: ({ alt, src }: ImageProps) => <Image src={src} alt={alt ? alt : ''} />,
  //   Sparkles,
  Image
  //   Highlight,
  //   Newsletter,
}

function Content({ content }: any) {
  return <MDXRemote {...content} components={customMdxComponents} />
}

export default Content
