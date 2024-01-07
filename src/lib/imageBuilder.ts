import {client} from "@/lib/sanity"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export default function urlFor(source: string) {
    return builder.image(source)
}