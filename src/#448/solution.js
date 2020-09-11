var findDisappearedNumbers = function (nums) {
  let res = []

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i])
    if (nums[index-1] > 0) {
      nums[index-1] *= -1
    }
  }
  nums.forEach((v, index) => {
    if (v > 0) {
      res.push(index + 1)
    }
  })
  return res
}
