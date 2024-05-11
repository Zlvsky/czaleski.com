import { getPostsPaths } from '@/lib/posts'
import { HOST } from '@/utils/consts'

export default async function sitemap() {
  let blogs = getPostsPaths().map((post) => ({
    url: `${HOST}/blog/${post.params.slug}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  let routes = [
    '',
    '/blog',
    '/work/betterdevs',
    '/work/visity',
    '/work/feedback-widget',
    '/work/realm-of-dungeons',
    '/work/konva-moodboard',
    '/work/one-place',
    '/work/automation-bot'
  ].map((route) => ({
    url: `${HOST}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogs]
}
