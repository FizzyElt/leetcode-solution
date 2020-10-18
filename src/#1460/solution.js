var canBeEqual = function (target, arr) {
  let map = new Map();

  target.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) - 1);
    } else {
      return false;
    }
    if (map.get(arr[i]) === 0) {
      map.delete(arr[i]);
    }
  }
  return true;
};
