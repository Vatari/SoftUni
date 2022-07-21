function mathPowerFunction(num, pow) {
  // console.log(Math.pow(num, pow)); - METHOD SOLUTION

  let result = 1;
  for (i = 1; i <= pow; i++) {
    result *= num;
  }
  console.log(result);
}
mathPowerFunction(2, 8);
mathPowerFunction(3, 4);
