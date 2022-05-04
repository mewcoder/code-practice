export default class EventBus {
  /**
   * {
   *    'key1': [
   *        { fn: fn1, isOnce: false },
   *        { fn: fn2, isOnce: false },
   *        { fn: fn3, isOnce: true },
   *    ]
   *    'key2': [] // 有序
   *    'key3': []
   * }
   */
  constructor() {
    this.events = {}
  }

  on(type, fn, isOnce = false) {
    const events = this.events
    if (events[type] == null) {
      events[type] = [] // 初始化 key 的 fn 数组
    }
    events[type].push({ fn, isOnce })
  }

  once(type, fn) {
    this.on(type, fn, true)
  }

  off(type, fn) {
    if (!fn) {
      // 解绑所有 type 的函数
      this.events[type] = []
    } else {
      // 解绑单个 fn
      const fnList = this.events[type]
      if (fnList) {
        this.events[type] = fnList.filter(item => item.fn !== fn)
      }
    }
  }

  emit(type, ...args) {
    const fnList = this.events[type]
    if (fnList == null) return

    // 注意
    this.events[type] = fnList.filter(item => {
      const { fn, isOnce } = item
      fn(...args)

      // once 执行一次就要被过滤掉
      if (!isOnce) return true
      return false
    })
  }
}
