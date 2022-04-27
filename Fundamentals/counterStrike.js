function counterStrike(arr) {
  let initialEnergy = +arr.shift();
  let count = 0;
  let gameOver = false;

  while (arr[0] !== "End of battle") {
    distance = +arr.shift();
    if (initialEnergy >= distance) {
      count++;
      initialEnergy -= distance;
    } else {
      gameOver = true;
      break;
    }
    if (count % 3 == 0) {
      initialEnergy += count;
    }
  }
  if (!gameOver) {
    console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`);
  } else {
    console.log(
      `Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`
    );
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
