function solve(arr) {
  let result = arr.map((el) => el.split(" ").map(Number));

  let sumFirstDiagonal = 0;
  for (var i = 0; i < result.length; i++) {
    sumFirstDiagonal = sumFirstDiagonal + result[i][i];
  }
  let sumSecondDiagonal = 0;
  for (var j = 0; j < result.length; j++) {
    sumSecondDiagonal = sumSecondDiagonal + result[j][result.length - 1 - j];
  }

  if (sumFirstDiagonal == sumSecondDiagonal) {
    for (var q = 0; q < result.length; q++) {
      for (var z = 0; z < result.length; z++) {
        if (q != z && q != result.length - 1 - z) {
          result[q][z] = sumFirstDiagonal;
        }
      }
    }
    print(result);
  } else {
    print(result);
  }

  function print(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i].join(" "));
    }
  }
}
solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
