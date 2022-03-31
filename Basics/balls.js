function abc(input) {
  let balls = Number(input[0]);
  let totalPoints = 0;
  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let blackBalls = 0;
  let otherBalls = 0;

  for (let i = 1; i <= balls; i++) {
    let ballType = input[i];
    if (ballType === "red") {
      totalPoints += 5;
      redBalls += 1;
    } else if (ballType === "orange") {
      totalPoints += 10;
      orangeBalls += 1;
    } else if (ballType === "yellow") {
      totalPoints += 15;
      yellowBalls += 1;
    } else if (ballType === "white") {
      totalPoints += 20;
      whiteBalls += 1;
    } else if (ballType === "black") {
      totalPoints = totalPoints / 2;
      blackBalls += 1;
    } else {
      otherBalls += 1;
    }
  }
  console.log(`Total points: ${Math.floor(totalPoints)}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${otherBalls}`);
  console.log(`Divides from black balls: ${blackBalls}`);
}

abc(["3", "white", "black", "pink"]);
