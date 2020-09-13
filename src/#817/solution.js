function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var numComponents = function (head, G) {

  let Gmap = new Map()

  G.forEach(num => {
    Gmap.set(num, true)
  })

  let res = 0
  let check = false
  let current = head

  while (current !== null) {
    if (Gmap.has(current.val)) {
      if (!check) {
        res++
        check = true
      }
    } else {
      check = false
    }
    current = current.next
  }
  
  return res
}
