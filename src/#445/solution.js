function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var addTwoNumbers = function (l1, l2) {
  if (l1 === null && l2 === null) {
    return null
  }
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }

  let currentL1 = l1
  let currentL2 = l2
  let count1 = 0
  let count2 = 0
  while (currentL1 !== null) {
    count1++
    currentL1 = currentL1.next
  }
  while (currentL2 !== null) {
    count2++
    currentL2 = currentL2.next
  }
  let res = null
  let carry = 0
  if (count1 > count2) {
    carry = helper(l1, l2, count1 - count2, 0)
    res = l1
  } else {
    carry = helper(l2, l1, count2 - count1, 0)
    res = l2
  }

  if (carry === 1) {
    return new ListNode(1, res)
  }
  return res
}
function helper(l1, l2, count, index) {
  if (l1 === null && l2 === null) {
    return 0
  }

  if (index >= count) {
    l1.val = l1.val + l2.val + helper(l1.next, l2.next, count, index + 1)
  } else {
    l1.val += helper(l1.next, l2, count, index + 1)
  }
  if (l1.val > 9) {
    l1.val -= 10
    return 1
  }
  return 0
}
