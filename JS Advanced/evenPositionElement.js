function solve(arr) {
  let result = arr.filter((x, i) => i % 2 == 0);
  console.log(result.join(" "));
}
solve(["20", "30", "40", "50", "60"]);
