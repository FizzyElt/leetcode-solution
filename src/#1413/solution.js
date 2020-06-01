var minStartValue = function(nums) {
    let cumSum = 0;
     let lowestCumSum = 0;
     
     for(let num of nums) {
         cumSum += num;
         if(cumSum < lowestCumSum) {
             lowestCumSum = cumSum;
         }
     }
     
     return lowestCumSum * -1 + 1
 };