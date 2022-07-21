function smartLily(input) {
  let lilyAge = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let singleToyPrice = Number(input[2]);

  let toysCounter = 0;
  let stolenMoney = 0;
  let savedMoney = 0;
  let addedMoney = 10;

  for (let i = 1; i <= lilyAge; i++) {
    if (i % 2 === 0) {
      savedMoney = savedMoney + addedMoney;
      addedMoney += 10;
      stolenMoney += 1;
    } else {
      toysCounter += 1;
    }
  }
  let totalMoneyFromToys = singleToyPrice * toysCounter;
  let totalSavedMoney = savedMoney + totalMoneyFromToys - stolenMoney;
  if (totalSavedMoney >= washingMachinePrice) {
    console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
  }
}
smartLily(["10", "170.00", "6"]);
