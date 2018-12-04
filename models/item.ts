export default interface Item {
  id: string
  publicId: string
  title: string
  creators: string[]
  images: string[]
  description?: string
  releaseDate?: Date
  publisherName?: string
  isbn?: string
  jan?: string
  rakutenUrl?: string
  amazonUrl?: string
}
