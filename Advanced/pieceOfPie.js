function solve(arr, str1, str2) {
  let first = arr.indexOf(str1);
  let second = arr.indexOf(str2);

  result = arr.slice(first, second + 1);

  return result;
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
