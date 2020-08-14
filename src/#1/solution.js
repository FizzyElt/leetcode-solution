var twoSum = function (nums, target) {
  let m = new Map()

  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    if (m.has(another)) {
      return [m.get(another), i]
    }
    m.set(nums[i], i)
  }
  return null
}
