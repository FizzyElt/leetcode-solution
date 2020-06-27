var threeSum = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      if (start > i + 1 && nums[start] === nums[start - 1]) {
        start++
        continue
      }
      if (end < nums.length - 1 && nums[end] === nums[end + 1]) {
        end--
        continue
      }

      let sum = nums[i] + nums[start] + nums[end]

      if (sum === 0) {
        res.push([nums[i], nums[start], nums[end]])
        start++
        end--
      } else if (sum < 0) {
        start++
      } else {
        end--
      }
    }
  }
  return res
}
