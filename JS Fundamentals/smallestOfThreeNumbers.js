function smallestOfThreeNumbers(num1, num2, num3) {
  function findSmallestNumber(n1, n2, n3) {
    return Math.min(n1, n2, n3);
  }
  console.log(findSmallestNumber(num1, num2, num3));
}
smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
