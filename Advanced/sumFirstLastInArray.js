function solve(arr) {
  arr = arr.map(Number);
  let result = arr.reduce((acc, x) => (acc = arr.shift() + arr.pop()), 0);
  console.log(result);
}
solve(["20", "30", "40"]);
