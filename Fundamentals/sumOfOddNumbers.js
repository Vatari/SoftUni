function sumOfOddNumbers(num) {
  let sum = 0;
  counter = 0;
  let i = 1;
  while (i <= 100) {
    if (i % 2 != 0) {
      console.log(i);
      sum += i;
      counter++;
    }

    if (counter == num) {
      console.log(`Sum: ${sum}`);
      break;
    }
    i++;
  }
}
sumOfOddNumbers(5);
