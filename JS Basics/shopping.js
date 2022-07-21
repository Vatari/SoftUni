function shopping(input) {
  let budget = Number(input[0]);
  let videocards = Number(input[1]);
  let cpu = Number(input[2]);
  let ram = Number(input[3]);

  let moneyForVideocards = videocards * 250;
  let moneyForCpu = moneyForVideocards * 0.35 * cpu;
  let moneyForRam = moneyForVideocards * 0.1 * ram;

  let totalExpenses = moneyForVideocards + moneyForCpu + moneyForRam;

  if (videocards > cpu) {
    totalExpenses *= 0.85;
  }

  if (budget >= totalExpenses) {
    console.log(`You have ${(budget - totalExpenses).toFixed(2)} leva left!`);
  } else
    console.log(
      `Not enough money! You need ${(totalExpenses - budget).toFixed(
        2
      )} leva more!`
    );
}
shopping(["900", "2", "1", "3"]);
