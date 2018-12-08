// 比較時は、(type as ProductType === ProductType.Book)とcastしてやらないとerrorになる事がある

export enum ProductType {
  Book = 'book',
  Music = 'music',
  Movie = 'movie',
}
