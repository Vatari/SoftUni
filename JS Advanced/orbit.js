function solve(arr) {
  let rows = arr[0];
  let cols = arr[1];
  let startRow = arr[2];
  let startCol = arr[3];

  let result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      result[row][col] =
        Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
    }
  }

  console.log(result.map((row) => row.join(" ")).join("\n"));
}
solve([4, 4, 0, 0]);
