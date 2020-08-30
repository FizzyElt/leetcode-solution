var peakIndexInMountainArray = function (A) {
  let peak = Math.floor(A.length / 2)

  while (peak > 0 && peak < A.length - 1) {
    if (A[peak - 1] < A[peak] && A[peak] > A[peak + 1]) {
      return peak
    }
    if (A[peak - 1] > A[peak]) {
      peak--
    } else {
      peak++
    }
  }
  return peak
}
