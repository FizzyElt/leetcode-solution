function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  let node = new ListNode()
  if (l1.val > l2.val) {
    node.val = l2.val
    node.next = mergeTwoLists(l1, l2.next)
  } else {
    node.val = l1.val
    node.next = mergeTwoLists(l1.next, l2)
  }
  return node
}
