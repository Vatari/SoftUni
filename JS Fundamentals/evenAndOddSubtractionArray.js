function evenAndOddSubtractionArray(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    let result = Number(arr[i]);
    if (arr[i] % 2 == 0) {
      sumEven += result;
    } else {
      sumOdd += result;
    }
  }
  console.log(sumEven - sumOdd);
}
evenAndOddSubtractionArray([1, 2, 3, 4, 5, 6]);
evenAndOddSubtractionArray([3, 5, 7, 9]);
evenAndOddSubtractionArray([2, 4, 6, 8, 10]);
