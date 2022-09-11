function bonusPoints(input) {
  let score = Number(input[0]);
  let bonus = 0;

  if (score <= 100) {
    bonus = 5;
  } else if (score < 1000) {
    bonus = score * 0.2;
  } else if (score > 1000) {
    bonus = score * 0.1;
  }

  if (score % 2 === 0) {
    bonus = bonus + 1;
  } else if (score % 5 === 0) {
    bonus = bonus + 2;
  }

  console.log(`${bonus} ${score + bonus}`);
}
bonusPoints(["20"]);
bonusPoints(["50"]);

