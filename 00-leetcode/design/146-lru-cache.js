/*
 * [146] LRU 缓存
 */

export class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let cache = this.cache;
    if (cache.has(key)) {
      let temp = cache.get(key);
      cache.delete(key);
      cache.set(key, temp);
      return temp;
    } else {
      return -1;
    }
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    let cache = this.cache;
    if (cache.has(key)) {
      cache.delete(key);
    } else if (cache.size >= this.capacity) {
      cache.delete(cache.keys().next().value); // 删除第一个
    }
    cache.set(key, value);
  }
}
/**
 * 不用map怎么实现
 * 1.用数组和对象模拟实现map，数组可以保证有序性，
 *  但是删除的时候，时间复杂度高了
 * 
 * 2.要使用双向链表
 * 
 */

export class LRUCache2 {

  constructor(length) {
    if (length < 1) throw new Error('invalid length')
    this.length = length
  }

  moveToTail(curNode) {
    const tail = this.listTail
    if (tail === curNode) return

    // -------------- 1. 让 prevNode nextNode 断绝与 curNode 的关系 --------------
    const prevNode = curNode.prev
    const nextNode = curNode.next
    if (prevNode) {
      if (nextNode) {
        prevNode.next = nextNode
      } else {
        delete prevNode.next
      }
    }
    if (nextNode) {
      if (prevNode) {
        nextNode.prev = prevNode
      } else {
        delete nextNode.prev
      }

      if (this.listHead === curNode) this.listHead = nextNode
    }

    // -------------- 2. 让 curNode 断绝与 prevNode nextNode 的关系 --------------
    delete curNode.prev
    delete curNode.next

    // -------------- 3. 在 list 末尾重新建立 curNode 的新关系 --------------
    if (tail) {
      tail.next = curNode
      curNode.prev = tail
    }
    this.listTail = curNode
  }

  tryClean() {
    while (this.dataLength > this.length) {
      const head = this.listHead
      if (head == null) throw new Error('head is null')
      const headNext = head.next
      if (headNext == null) throw new Error('headNext is null')

      // 1. 断绝 head 和 next 的关系
      delete headNext.prev
      delete head.next

      // 2. 重新赋值 listHead
      this.listHead = headNext

      // 3. 清理 data ，重新计数
      delete this.data[head.key]
      this.dataLength = this.dataLength - 1
    }
  }

  get(key) {
    const data = this.data
    const curNode = data[key]

    if (curNode == null) return null

    if (this.listTail === curNode) {
      // 本身在末尾（最新鲜的位置），直接返回 value
      return curNode.value
    }

    // curNode 移动到末尾
    this.moveToTail(curNode)

    return curNode.value
  }

  set(key, value) {
    const data = this.data
    const curNode = data[key]

    if (curNode == null) {
      // 新增数据
      const newNode = { key, value }
      // 移动到末尾
      this.moveToTail(newNode)

      data[key] = newNode
      this.dataLength++

      if (this.dataLength === 1) this.listHead = newNode
    } else {
      // 修改现有数据
      curNode.value = value
      // 移动到末尾
      this.moveToTail(curNode)
    }

    // 尝试清理长度
    this.tryClean()
  }
}