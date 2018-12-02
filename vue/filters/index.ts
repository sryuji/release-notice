// methodからはthis.$options.filters.xxxxで使える

export * from './url'
// export * from './address'
export * from './date'
// export * from './number'
export * from './string'

export function toLabel<T extends number | string>(value: T, options: Array<Array<T>>): T {
  if (!value || !options) return ''
  const option = options.find(v => v[0] === value)
  return option ? option[1] : value
}
