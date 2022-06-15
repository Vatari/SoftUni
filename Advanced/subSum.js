function solve(arr, startIndex, endIndex) {
  if (!Array.isArray(arr)) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > arr.length) {
    endIndex = arr.length - 1;
  }

  return arr
    .slice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);
}
solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
solve([10, "twenty", 30, 40], 0, 2);
solve([], 1, 2);
solve("text", 0, 2);
