import { createImageUrlBuilder } from '@sanity/image-url'
import client from '@/sanity/sanity.client'

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
