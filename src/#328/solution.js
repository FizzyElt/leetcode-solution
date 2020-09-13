function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var oddEvenList = function (head) {
  if (head === null) {
    return null
  }

  let current = head
  let oddNode = new ListNode(0, null)
  let res = oddNode
  let evenNode = new ListNode(0, null)
  let evenHead = evenNode

  while (current.next !== null && current.next.next !== null) {
    oddNode.next = current
    oddNode = oddNode.next
    if (current.next !== null) {
      evenNode.next = current.next
      evenNode = evenNode.next
    }
    current = current.next.next
  }

  oddNode.next = current
  oddNode = oddNode.next
  if (current.next !== null) {
    evenNode.next = current.next
    evenNode = evenNode.next
  }

  evenNode.next = null
  oddNode.next = evenHead.next

  return res.next
}
