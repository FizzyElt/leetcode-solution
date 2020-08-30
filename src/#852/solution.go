package solution

func peakIndexInMountainArray(A []int) int {
	peak := len(A) / 2
	for peak > 0 && peak < len(A) {
		if A[peak-1] < A[peak] && A[peak] > A[peak+1] {
			return peak
		}
		if A[peak-1] > A[peak] {
			peak--
		} else {
			peak++
		}
	}
	return peak
}
