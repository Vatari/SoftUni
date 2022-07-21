function numberDivisibleBy9(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let sum = 0;
  let result = "";

  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 9 === 0) {
      sum += i;
      result += i + "\n";
    }
  }
  console.log("The sum: " + sum);
  console.log(result);
}
numberDivisibleBy9(["100", "200"]);
