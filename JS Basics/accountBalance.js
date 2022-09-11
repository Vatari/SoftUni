function accountBalance(input) {
  let accountBalance = 0;
  let index = 0;
  let command = input[index];
  index++;

  while (command !== "NoMoreMoney") {
    let money = Number(command);
    if (money < 0) {
      console.log("Invalid operation!");
      break;
    }
    accountBalance += money;
    console.log(`Increase: ${money.toFixed(2)}`);
    command = input[index];
    index++;
  }
  console.log("Total: " + accountBalance.toFixed(2));
}
accountBalance(["120", "49.55", "-150"]);
