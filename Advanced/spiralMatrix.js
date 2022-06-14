function solve(row, column) {
  let result = [];
  let count = 1;
  let colStart = 0;
  let colEnd = column - 1;
  let rowStart = 0;
  let rowEnd = row - 1;

  for (let i = 0; i < row; i++) {
    result.push([]);
  }

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = count;
      count++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = count;
      count++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = count;
      count++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = count;
      count++;
    }
    colStart++;
  }
  result.forEach((row) => console.log(row.join(" ")));
}
solve(5, 5);
