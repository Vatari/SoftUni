function newHome(input) {
  let flowerType = input[0];
  let flowersCount = Number(input[1]);
  let budget = Number(input[2]);
  let singleFlowerPrice = 0;
  let moneyForAllFlowers = 0;
  //let flowersPrice = flowersCount *

  switch (flowerType) {
    case "Roses":
      singleFlowerPrice = 5;
      moneyForAllFlowers = flowersCount * singleFlowerPrice;
      if (flowersCount > 80) {
        moneyForAllFlowers = moneyForAllFlowers * 0.9;
      }
      break;
    case "Dahlias":
      singleFlowerPrice = 3.8;
      moneyForAllFlowers = flowersCount * singleFlowerPrice;
      if (flowersCount > 90) {
        moneyForAllFlowers = moneyForAllFlowers * 0.85;
      }

      break;
    case "Tulips":
      singleFlowerPrice = 2.8;
      moneyForAllFlowers = flowersCount * singleFlowerPrice;
      if (flowersCount > 80) {
        moneyForAllFlowers = moneyForAllFlowers * 0.85;
      }

      break;
    case "Narcissus":
      singleFlowerPrice = 3;
      moneyForAllFlowers = flowersCount * singleFlowerPrice;
      if (flowersCount < 120) {
        moneyForAllFlowers = moneyForAllFlowers * 1.15;
      }

      break;
    case "Gladiolus":
      singleFlowerPrice = 2.5;
      moneyForAllFlowers = flowersCount * singleFlowerPrice;
      if (flowersCount < 80) {
        moneyForAllFlowers = moneyForAllFlowers * 1.2;
      }

      break;
  }

  if (budget >= moneyForAllFlowers) {
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(
        budget - moneyForAllFlowers
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(moneyForAllFlowers - budget).toFixed(
        2
      )} leva more.`
    );
  }
}
newHome(["Tulips", "88", "260"]);