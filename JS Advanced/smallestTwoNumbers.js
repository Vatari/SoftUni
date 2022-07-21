function solve(arr) {
  let result = [];
  arr = arr.sort((a, b) => {
    return a - b;
  });

  result.push(arr.shift());
  result.push(arr.shift());

  return result;
}
solve([30, 15, 50, 5]);
