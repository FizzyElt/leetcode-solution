var runningSum = function (nums) {
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        nums[i] = total
    }
    return nums
}
