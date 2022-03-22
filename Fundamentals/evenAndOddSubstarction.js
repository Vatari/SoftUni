function solve(arr) {
  // Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

  let sumOdd = 0;
  let sumEven = 0;

  for (let number of arr) {
    if (number % 2 == 0) {
      sumEven += number;
    } else {
      sumOdd += number;
    }
  }
  console.log(sumEven - sumOdd);
}
solve([1, 2, 3, 4, 5, 6]);
