function solve(arr) {
  let result = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let player = "X";

  for (let line of arr) {
    [currRow, currCol] = line.split(" ").map(Number);

    if (result[currRow][currCol] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    result[currRow][currCol] = player;

    for (let i = 0; i < 3; i++) {
      if (
        result[i][0] === player &&
        result[i][1] === player &&
        result[i][2] === player
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      } else if (
        result[0][i] === player &&
        result[1][i] === player &&
        result[2][i] === player
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      }
    }

    //check left to right
    if (
      result[0][0] === player &&
      result[1][1] === player &&
      result[2][2] === player
    ) {
      console.log(`Player ${player} wins!`);
      printMatrix();
      return;
    }

    //check right to left
    else if (
      result[0][2] === player &&
      result[1][1] === player &&
      result[2][0] === player
    ) {
      console.log(`Player ${player} wins!`);
      printMatrix();
      return;
    }

    let theresFalse = false;

    for (let row = 0; row < result.length; row++) {
      if (result[row].includes(false)) {
        theresFalse = true;
      }
    }

    if (!theresFalse) {
      console.log("The game ended! Nobody wins :(");
      printMatrix();
      return;
    }

    player = player === "X" ? "O" : "X";
  }

  function printMatrix() {
    for (let row = 0; row < result.length; row++) {
      console.log(result[row].join("\t"));
    }
  }
}
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
