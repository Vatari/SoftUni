function sumOfNumbers(input) {
  let n = input[0];
  let textNum = "" + n;
  let sum = 0;

  for (let s = 0; s < textNum.length; s++) {
    sum += Number(textNum[s]);
  }
  console.log(`The sum of the digits is:${sum} `);
}
sumOfNumbers(["1234"]);
