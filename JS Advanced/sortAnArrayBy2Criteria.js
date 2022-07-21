function solve(arr) {
  console.log(
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
  );
}
solve(["alpha", "beta", "gamma"]);
