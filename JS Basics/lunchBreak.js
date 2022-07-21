function lunchBreak(input) {
  let serial = input[0];
  let serialLength = Number(input[1]);
  let rest = Number(input[2]);

  let lunchTime = (rest * 1) / 8;
  let timeForRest = (rest * 1) / 4;

  let timeLeft = rest - lunchTime - timeForRest;

  if (timeLeft >= serialLength) {
    console.log(
      `You have enough time to watch ${serial} and left with ${Math.ceil(
        timeLeft - serialLength
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${serial}, you need ${Math.ceil(
        serialLength - timeLeft
      )} more minutes.`
    );
  }
}

lunchBreak(["Teen Wolf", "48", "60"]);
