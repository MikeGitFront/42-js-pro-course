const quickSort = array => {
  const arr = [...array]
  if (arr.length < 2) return arr
  const pivot = arr[0]
  const less = arr.filter((item) => item.order < pivot.order)
  const more = arr.filter((item) => item.order > pivot.order)
  return [...quickSort(less), pivot, ...quickSort(more)]
}

const toFlat = array => {
  const stack = [...array]
  const result = []
  while (stack.length) {
    const deeper = stack.pop()
    if (Array.isArray(deeper)) {
      stack.push(...deeper)
    } else {
      result.push(deeper)
    }
  }
  return result.reverse()
}

const binarySearch = (array, searchValue) => {
  let start = 0
  let end = array.length
  let middle
  let found = false
  let position = -1
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2)
    if (array[middle].amount === searchValue) {
      found = true
      position = middle
      return array[position]
    }
    if (searchValue < array[middle].amount) {
      end = middle - 1
    }
    else {
      start = middle + 1
    }
  }
  return position
}

class HashTable {
  static getKeyByName(name) {
    return name.charCodeAt(0)
  }
  constructor() {
    this.map = new Map()
  }
  add(value) {
    const key = HashTable.getKeyByName(value.name)
    if (!this.map.has(key)) {
      this.map.set(key, [])
    }
    this.map.get(key).push(value)
    return key
  }
  find(name) {
    const key = HashTable.getKeyByName(name)
    const employeesMap = this.map.get(key)
    if (!employeesMap) {
      return
    }
    return employeesMap.find(item => item.name === name)
  }
  removeByName(name) {
    const key = HashTable.getKeyByName(name)
    let employeesMap = this.map.get(key)
    if (!employeesMap) {
      return
    }
    this.map.set(key, employeesMap.filter(item => item.name !== name))
  }
}

module.exports = {
  quickSort,
  toFlat,
  binarySearch,
  HashTable,
}
