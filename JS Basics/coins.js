function coins(input) {
  let change = Number(input[0]);

  let inCoins = Math.floor(change * 100);
  let coinsCounter = 0;

  while (inCoins > 0) {
    if (inCoins >= 200) {
      coinsCounter++;
      inCoins -= 200;
    } else if (inCoins >= 100) {
      coinsCounter++;
      inCoins -= 100;
    } else if (inCoins >= 50) {
      coinsCounter++;
      inCoins -= 50;
    } else if (inCoins >= 20) {
      coinsCounter++;
      inCoins -= 20;
    } else if (inCoins >= 10) {
      coinsCounter++;
      inCoins -= 10;
    } else if (inCoins >= 5) {
      coinsCounter++;
      inCoins -= 5;
    } else if (inCoins >= 2) {
      coinsCounter++;
      inCoins -= 2;
    } else if (inCoins >= 1) {
      coinsCounter++;
      inCoins -= 1;
    }
  }
  console.log(coinsCounter);
}
coins(["1.23"]);
