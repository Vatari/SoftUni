function printAndSum(num1, num2) {
  let sum = 0;
  let str = "";

  for (let i = num1; i <= num2; i++) {
    str += i + " ";

    sum += i;
  }
  console.log(str);

  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
