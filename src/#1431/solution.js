var kidsWithCandies = function (candies, extraCandies) {
  let maxNum = Math.max(...candies);
  let res = new Array(candies.length);

  candies.forEach((v, i) => {
    res[i] = v + extraCandies >= maxNum;
  });

  return res;
};
