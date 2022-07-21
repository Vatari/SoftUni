function solve(arr) {
  /*   let result = [];

  for (el of arr) {
    let sum = el.reduce((acc, x) => acc + x,0);
    result.push(sum);
  }

  let isMagical = result.every((x) => x === result[0]);
  console.log(isMagical); */

  let sum = arr[0].reduce((a, b) => a + b, 0);
  let isMagical = true;

  for (let i = 0; i < arr.length; i++) {
    let rowSum = arr[i].reduce((a, b) => a + b, 0);
    let colSum = arr.map((row) => row[i]).reduce((a, b) => a + b, 0);

    if (rowSum !== sum || colSum !== sum) {
      isMagical = false;
      break;
    }
  }

  console.log(isMagical);
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
