function solve(n1, n2) {
  let result = 0;
  n1 = Number(n1);
  n2 = Number(n2);

  for (let i = n1; i <= n2; i++) {
    result += i;
  }
  console.log(result);
}
solve("1", "5");
solve("-8", "20");
