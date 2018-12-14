import Item from '@/models/item'
import Constant from '@/models/constant'
import compareAsc from 'date-fns/compare_asc'

export function sortItems(items): Item[] {
  items.sort((a, b) => {
    const pre = a.releaseDate || Constant.FUTURE_DATE
    const cur = b.releaseDate || Constant.FUTURE_DATE
    return compareAsc(cur, pre)
  })
  return items
}
