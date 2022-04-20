function vacation(input) {
  let neededMoney = Number(input[0]);
  let availableMoney = Number(input[1]);

  let index = 2;
  let command = input[index];
  let totalDays = 0;
  let spendDays = 0;

  while (availableMoney < neededMoney) {
    totalDays++;
    index++;
    if (command === "spend") {
      spendDays++;
      if (spendDays === 5) {
        console.log(`You can't save the money.`);
        console.log(totalDays);
        break;
      }
      let moneyToSpend = Number(input[index]);
      availableMoney -= moneyToSpend;
      if (availableMoney < 0) {
        availableMoney = 0;
      }
    } else if (command === "save") {
      spendDays = 0;
      let moneyToSave = Number(input[index]);
      availableMoney += moneyToSave;
    }
    index++;
    command = input[index];
  }
  if (availableMoney >= neededMoney) {
    console.log(`You saved the money for ${totalDays} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
