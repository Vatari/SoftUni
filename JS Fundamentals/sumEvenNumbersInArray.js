function sumEvenNumbersInArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let result = Number(arr[i]);
    if (result % 2 == 0) {
      sum += result;
    }
  }
  console.log(sum);
}
sumEvenNumbersInArray(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbersInArray(["3", "5", "7", "9"]);
sumEvenNumbersInArray(["2", "4", "6", "8", "10"]);
