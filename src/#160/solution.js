function ListNode(val) {
  this.val = val
  this.next = null
}

var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }

  let cnt = 0
  let currentA = headA
  let currentB = headB
  
  while (currentA !== null || currentB !== null) {
    if (currentA !== null) {
      cnt++
      currentA = currentA.next
    }
    if (currentB !== null) {
      cnt--
      currentB = currentB.next
    }
  }

  if (cnt > 0) {
    currentA = headA
    currentB = headB
  } else {
    currentA = headB
    currentB = headA
    cnt = -cnt
  }

  for (let i = cnt; i > 0; i--) {
    currentA = currentA.next
  }

  while (currentA !== currentB) {
    currentA = currentA.next
    currentB = currentB.next
  }
  return currentA
}
