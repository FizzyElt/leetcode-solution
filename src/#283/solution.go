package solution

func moveZeros(nums []int) {
	for i:=0;i<len(nums);i++{
        if nums[i] == 0{
            copy(nums[i:],nums[i+1:])
            nums[len(nums)-1] = 0
            nums = nums[:len(nums)-1]
            i--
        }
    }
}
