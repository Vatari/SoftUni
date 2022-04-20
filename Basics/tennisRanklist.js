function tennisRanklist(input) {
  let tournamets = Number(input[0]);
  let startingPoints = Number(input[1]);
  let points = startingPoints;
  let wins = 0;
  let inputL = input.length;

  for (let i = 2; i < inputL; i += 1) {
    let stage = input[i];
    switch (stage) {
      case "W":
        points += 2000;
        wins += 1;
        break;
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;
    }
  }
  let avgPoints = (points - startingPoints) / tournamets;
  let percentWins = (wins / tournamets) * 100;
  console.log(`Final points: ${points}`);
  console.log(`Average points: ${Math.trunc(avgPoints)}`);
  console.log(percentWins.toFixed(2) + `%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
