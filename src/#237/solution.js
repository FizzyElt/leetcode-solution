function ListNode(val) {
  this.val = val
  this.next = null
}

var deleteNode = function (node) {
    let currVal=node.val
    let nextVal=node.next.val

    let temp=currVal
    node.val=nextVal
    node.next.val=temp
    node.next=node.next.next

}
