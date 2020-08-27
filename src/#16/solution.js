var threeSumClosest = function (nums, target) {
  let n = nums.length
  let res = 0
  let diff = Number.MAX_VALUE
  if (n > 2) {
    nums.sort((a, b) => a - b)

    for (let i = 0; i < n - 2; i++) {
      let left = i + 1,
        right = n - 1

      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right]

        if (Math.abs(sum - target) < diff) {
          diff = Math.abs(sum - target)
          res = sum
        }

        if (sum === target) {
          return res
        } else if (sum > target) {
          right--
        } else {
          left++
        }
      }
    }
  }
  return res
}
