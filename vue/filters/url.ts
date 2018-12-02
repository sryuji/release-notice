export function suitableImage(url: string, size: number): string {
  if (!url || !url.trim()) return '/images/no-image.png'
  return size && Number.isInteger(size) ? `${url}?_ex=${size}x${size}` : url
}
