function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var sortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  let prev = head
  let slow = head
  let fast = head
  while (fast !== null) {
    prev = slow
    slow = slow.next
    fast = fast.next
    if (fast.next !== null) {
      fast = fast.next
    }
  }

  prev.next = null
  let l1 = sortList(head)
  let l2 = sortList(slow)

  return mergeList(l1, l2)
}

function mergeList(l1, l2) {
  let dummy = new ListNode()
  let current = dummy

  while (l1 !== null && l2 != null) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  if (l1 !== null) {
    current.next = l1
  } else {
    current.next = l2
  }
  
  return dummy.next
}
