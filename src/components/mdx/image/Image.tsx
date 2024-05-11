/* eslint-disable @next/next/no-img-element */
import { memo } from 'react'

type ImageProps = {
  readonly src: any
  readonly alt: string
  readonly width?: string | number
  readonly height?: string | number
}

export const Image = memo(({ src, alt, width = '100%', height }: ImageProps) => {
  return (
    <div className="relative my-12 flex h-auto w-auto content-center items-center">
      <img
        className="max-w-full md:rounded-lg"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
})

Image.displayName = 'Image'
