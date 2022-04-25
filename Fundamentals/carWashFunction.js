function carWashFunc(arr) {
  let percentage = 0;
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];

    if (command === "soap") {
      percentage += 10;
    }
    if (command === "vacuum cleaner") {
      percentage *= 1.25;
    }
    if (command === "water") {
      percentage *= 1.2;
    }
    if (command === "mud") {
      percentage *= 0.9;
    }
  }
  console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}
carWashFunc(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
