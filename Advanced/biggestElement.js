function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  console.log(Math.max(...result));
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
