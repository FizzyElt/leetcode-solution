var numIdenticalPairs = function (nums) {
    let numMap = new Map()

    nums.forEach((num) => {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1)
        } else {
            numMap.set(num, 0)
        }
    })
    let res = 0
    numMap.forEach((count) => {
        res += ((1 + count) * count) / 2
    })
    return res
}
