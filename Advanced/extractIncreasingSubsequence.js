function solve(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let result = arr.filter((num) => {
    if (num >= max) {
      max = num;
      return true;
    } else {
      return false;
    }
  });

  return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
