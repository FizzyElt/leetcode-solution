var intersection = function (nums1, nums2) {
  let map1 = new Map()
  let res = []

  nums1.forEach(num => {
    map1.set(num, 0)
  })

  nums2.forEach(num => {
    if (map1.has(num) && map1.get(num) === 0) {
      res.push(num)
      map1.set(num, 1)
    }
  })

  return res
}
