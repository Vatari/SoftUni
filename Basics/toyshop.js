function toyshop(input) {
  let tripPrice = Number(input[0]);
  let puzzlesCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let moneyFromPuzzles = puzzlesCount * 2.6;
  let moneyFromDolls = dollsCount * 3;
  let moneyFromBears = bearsCount * 4.1;
  let moneyFromMinions = minionsCount * 8.2;
  let moneyFromTrucks = trucksCount * 2;

  let moneyFromAllToys =
    moneyFromPuzzles +
    moneyFromTrucks +
    moneyFromBears +
    moneyFromDolls +
    moneyFromMinions;

  let allToysCount =
    puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

  if (allToysCount >= 50) {
    moneyFromAllToys *= 0.75;
  }

  let totalMoneyAfterRent = moneyFromAllToys * 0.9;
  if (totalMoneyAfterRent >= tripPrice) {
    console.log(`Yes! ${(totalMoneyAfterRent-tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - totalMoneyAfterRent).toFixed(
        2
      )} lv needed.`
    );
  }
}
toyshop(["40.8", "20", "25", "30", "50", "10"]);
