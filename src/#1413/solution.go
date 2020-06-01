package solution


func minStartValue(nums []int) int{
	cumSum:=0
	lowerCumSum:=0

	for _,num:=range nums{
		cumSum+=num
		if cumSum<lowerCumSum{
			lowerCumSum=cumSum
		}
	}
	return lowerCumSum * -1 + 1
} 