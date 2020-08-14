var maxArea = function (height) {
  if (height.length < 2) {
    return 0
  }

  let left = 0,
    right = height.length - 1
  let maxA = 0
  
  while (left < right) {

    let area = 0
    let width = right - left

    if (height[left] > height[right]) {
      area = height[right] * width
      right--
    } else {
      area = height[left] * width
      left++
    }

    if (area > maxA) {
      maxA = area
    }
  }
  return maxA
}
