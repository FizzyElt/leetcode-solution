function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true
  }

  let res = true

  let p1 = head
  let p2 = head
  while (p2.next !== null && p2.next.next !== null) {
    p1 = p1.next
    p2 = p2.next.next
  }

  let preMiddle = p1
  let preCurrent = p1.next
  while (preCurrent.next !== null) {
    let current = preCurrent.next
    preCurrent.next = current.next
    current.next = preMiddle.next
    preMiddle.next = current
  }

  p1 = head
  p2 = preMiddle.next
  while (p1 !== preMiddle) {
    if (p1.val === p2.val) {
      p1 = p1.next
      p2 = p2.next
    } else {
      res = false
      break
    }
  }
  if (p1 === preMiddle) {
    if (p2 !== null && p1.val !== p2.val) {
      return false
    }
  }
  return res
}
