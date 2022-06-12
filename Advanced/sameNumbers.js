function solve(num) {
  let arr = [num].join("").split("").map(Number);

  let sum = arr.reduce((acc, x) => acc + x, 0);

  let equal = arr.every((x) => x === arr[0]);

  console.log(equal);
  console.log(sum);
}
solve(22222);
