function Node(val, prev, next, child) {
  this.val = val
  this.prev = prev
  this.next = next
  this.child = child
}

var flatten = function (head) {
  if (head === null) {
    return null
  }

  let stack = []
  let current = head

  while (current.child !== null || current.next !== null) {
    if (current.child !== null) {
      if (current.next !== null) {
        stack.push(current.next)
      }

      let prev = current
      current.next = current.child
      current.child = null
      current = current.next
      current.prev = prev

    } else {
      current = current.next
    }
  }

  let prev = current

  while (stack.length !== 0) {
    if (current.next === null) {

      let popupNode = stack.pop()
      current.next = popupNode
      current = current.next
      current.prev = prev
      prev = current

    } else {

      current = current.next
      current.prev = prev
      prev = current
      
    }
  }
  return head
}
