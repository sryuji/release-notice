// methodからはthis.$options.filters.xxxxで使える

export * from './url'
// export * from './address'
export * from './date'
// export * from './number'
export * from './string'

type OptionValue = number | string
type Option = [OptionValue, string]
export function toLabel(value: OptionValue, options: Option[]): string {
  if (!value || !options) return ''
  const option = options.find(v => v[0] === value)
  return option ? option[1] : `${value}`
}
