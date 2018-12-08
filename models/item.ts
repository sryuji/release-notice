export default interface Item {
  id: string
  productId: string
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
