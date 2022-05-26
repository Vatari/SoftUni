function sumDigits(num) {
  let sum = 0;
  numAsString = num.toString();

  for (let char of numAsString) {
    sum += Number(char);
  }
  console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
