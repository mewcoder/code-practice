export function deepClone(obj, map = new WeakMap()) {
  if (typeof obj !== 'object' && obj == null) return obj
  if (map.get(obj)) return map.get(obj)
  let target = Array.isArray(obj) ? [] : {}
  map.set(obj, target)

  // set 
  if (obj instanceof Set) {
    target = new Set()
    obj.forEach(item => target.add(deepClone(item, map)))
  }

  // Map
  if (obj instanceof Map) {
    target = new Map()
    obj.forEach((value, key) => {
      const valueClone = deepClone(value, map)
      const keyClone = deepClone(key, map)
      target.set(keyClone, valueClone)
    })
  }

  if (obj instanceof Array) {
    target = obj.map(item => deepClone(item, map))
  }

  for (const key in obj) {
    target[key] = deepClone(obj[key], map)
  }
}