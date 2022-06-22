function diagonalSums(arr) {
  let main = 0;
  let second = 0;

  for (let i = 0; i < arr.length; i++) {
    main += arr[i][i];
    second += arr[i][arr.length - 1 - i];
  }
  console.log(main, second);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
