function aggregate(arr) {
  let sum = arr.reduce((acc, x) => acc + x, 0);
  let divided = arr.reduce((acc, x) => acc + 1 / x, 0);
  let concated = arr.join("");

  console.log(sum);
  console.log(divided);
  console.log(concated);
}
aggregate([1, 2, 3]);
