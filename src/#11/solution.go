package solution

func maxArea(height []int) int {

	if len(height) < 2 {
		return 0
	}

	left, right := 0, len(height)-1
	maxA := 0

	for left < right {
		var area int = 0
		var width int = right - left
		if height[left] > height[right] {
			area = height[right] * width
			right--
		} else {
			area = height[left] * width
			left++
		}
		if area > maxA {
			maxA = area
		}
	}
	return maxA
}
