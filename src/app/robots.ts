import { HOST } from '@/utils/consts'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: `${HOST}/sitemap.xml`,
    host: HOST
  }
}
