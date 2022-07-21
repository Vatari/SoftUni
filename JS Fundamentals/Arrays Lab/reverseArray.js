function solve(num, arr) {
  let result = [];

  for (i = num; i--; ) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);
