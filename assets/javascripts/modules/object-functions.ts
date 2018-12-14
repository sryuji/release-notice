import dateParse from 'date-fns/parse'
import ExtendableError from './extendable-error'

const toString = Object.prototype.toString

export function isDate(target): boolean {
  return target instanceof Date
}

// Array, Date, Errorは含まれない. classのinstanceも含む
export function isPureObject(target): boolean {
  return toString.call(target) === '[object Object]'
}

// string/number/boolean/null/undefined/function以外
export function isObject(target): boolean {
  return target && typeof target === 'object'
}

export function isError(target): boolean {
  return target instanceof Error
}

export function extractByKeys(target, specifiedKeys): object {
  return Object.keys(target).reduce((result, key) => {
    if (specifiedKeys.find(k => k === key)) {
      result[key] = target[key]
    }
    return result
  }, {})
}

function sortObject(obj): object {
  if (!obj) return obj
  const keys = Object.keys(obj).sort()
  const result = {}
  keys.forEach(key => {
    let val = obj[key]
    if (typeof val === 'object') val = sortObject(val)
    result[key] = val
  })
  return result
}

export function isEqual(obj1, obj2): boolean {
  if (obj1 === obj2) return true
  if (!isObject(obj1) || !isObject(obj1)) return false
  const obj1Str = JSON.stringify(sortObject(obj1))
  const obj2Str = JSON.stringify(sortObject(obj2))
  return obj1Str === obj2Str
}

export function makeArrayUnique<T>(target: Array<T>): Array<T> {
  return Array.from(new Set(target))
}

export function mergeArray<T>(target: Array<T>, source: Array<T>): Array<T> {
  if (!Array.isArray(target)) throw new Error('target is not array')
  if (!Array.isArray(source)) return target
  let arr = target.concat(source)
  arr = makeArrayUnique(arr)
  target.splice(0, target.length, ...arr)
  return target
}

export function cleanArray<T>(target: Array<T>): Array<T> {
  target.splice(0, target.length)
  return target
}

export function cloneObject(source): object {
  if (!source) return source
  // eslint-disable-next-line typescript/no-use-before-define
  return mergeObject({}, source)
}

export function cloneArray(source): any[] {
  return source.map(v => {
    if (isPureObject(v)) {
      return cloneObject(v)
    } else if (Array.isArray(v)) {
      return cloneArray(v)
    } else if (isDate(v)) {
      return dateParse(v)
    } else {
      return v
    }
  })
}

export function overwriteArray<T>(target: Array<T>, source: Array<T>): Array<T> {
  const copiedArr: Array<T> = cloneArray(source)
  target.splice(0, target.length, ...copiedArr)
  return target
}

export function mergeObject(target: object, source, options = { setter: null, notOverideByNull: false }): object {
  if (!isObject(target) || !isObject(source)) throw new Error()
  Object.keys(source).forEach(key => {
    const sourceValue = source[key]
    const targetValue = target[key]
    let value

    if (sourceValue === null && options['notOverideByNull']) {
      return
    }
    // sourceValue: null,            object, array, date, string, number, boolean
    // targetValue: null, undefined, object, array, date, string, number, boolean
    // Error, functionは対象外.
    if (isPureObject(sourceValue)) {
      if (isPureObject(targetValue)) {
        mergeObject(targetValue, sourceValue)
      } else {
        value = cloneObject(sourceValue)
      }
    } else if (Array.isArray(sourceValue)) {
      if (Array.isArray(targetValue)) {
        overwriteArray(targetValue, sourceValue)
      } else {
        value = overwriteArray([], sourceValue)
      }
    } else if (isDate(sourceValue)) {
      value = dateParse(sourceValue)
    } else {
      value = sourceValue
    }

    if (value !== undefined) {
      if (options['setter'] && target[key] === undefined) {
        options['setter'](target, key, value)
      } else {
        target[key] = value
      }
    }
  })
  return target
}

export function cleanObject(target: object): void {
  Object.keys(target).forEach(key => {
    const value = target[key]
    if (isPureObject(value)) {
      cleanObject(target[key])
    } else if (Array.isArray(value)) {
      cleanArray(value)
    } else {
      target[key] = null
    }
  })
}

export function pickChangedProps(changed, beforeChange): object {
  return Object.keys(changed).reduce((result, key) => {
    const changedValue = changed[key]
    const baseValue = beforeChange[key]
    if (!(key in beforeChange)) {
      result[key] = changedValue
    } else if (!isEqual(changedValue, baseValue)) {
      if (Array.isArray(changedValue) && Array.isArray(baseValue)) {
        // TODO: 変更のみmergeに使える形で抽出するのが手間で特に必要としなかったため、まるごとcopy
        result[key] = changedValue
      } else if (isPureObject(changedValue) && isPureObject(baseValue)) {
        result[key] = pickChangedProps(changedValue, baseValue)
      } else {
        result[key] = changedValue
      }
    }
    return result
  }, {})
}

export function mergeUpdatedProps(target, latest, beforeChange): object {
  const changedProps = pickChangedProps(target, beforeChange)
  const updatedProps = pickChangedProps(latest, beforeChange)
  const updatedWithChanged = mergeObject(updatedProps, changedProps)
  return mergeObject(target, updatedWithChanged)
}
