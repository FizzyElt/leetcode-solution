function ListNode(val) {
  this.val = val
  this.next = null
}

var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }
  let slow = head,
    fast = head.next
  while (fast && fast.next && slow !== fast) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow === fast
}
