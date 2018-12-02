import dateFormat from 'date-fns/format'
import jaLocale from 'date-fns/locale/ja'
import differenceInDays from 'date-fns/difference_in_days'

export function formatDate(value: string | Date, format = 'YYYY/MM/DD'): string {
  if (!value) return ''
  return dateFormat(value, format, { locale: jaLocale })
}

export function formatTime(value: string | Date, format = 'HH:mm'): string {
  if (!value) return ''
  return dateFormat(value, format)
}

export function formatDatetime(value: string | Date, format = 'MM/DD HH:mm'): string {
  if (!value) return ''
  return dateFormat(value, format, { locale: jaLocale })
}

export function toDaysAgoFromNow(value: string | Date): string {
  if (!value) return ''
  const daysAgo = differenceInDays(new Date(), value)
  return daysAgo === 0 ? '今日' : `${daysAgo}日前`
}
