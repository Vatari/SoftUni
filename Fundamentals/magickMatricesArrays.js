function magickMatrices(arr) {
  let sumRow = arr.map((col) => col.reduce((a, b) => a + b));

  let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

  let allEqual = (array) => array.every((v) => v === array[0]);

  console.log(
    allEqual(sumRow) &&
      allEqual(sumRow) &&
      sumRow.toString() === sumCol.toString()
  );
}

magickMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
