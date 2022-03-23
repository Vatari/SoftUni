function solve(arr) {
  // Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

  let sumEven = 0;
  let numbers = arr.map(Number);

  for (number of numbers) {
    if (number % 2 == 0) {
      sumEven += number;
    }
  }
  console.log(sumEven);
}
solve(["1", "2", "3", "4", "5", "6"]);
