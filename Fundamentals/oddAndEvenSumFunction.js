function oddAndEvenSumFunction(arr) {
  let oddSum = 0;
  let evenSum = 0;
  let str = arr.toString();

  for (i = 0; i < str.length; i++) {
    let temp = +str[i];
    if (str[i] % 2 == 0) {
      evenSum += temp;
    } else {
      oddSum += temp;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSumFunction(1000435);
oddAndEvenSumFunction(3495892137259234);
