function factorialDivision(num1, num2) {
  function factorialCalculator(number) {
    let result = 1;
    while (number != 1) {
      result *= number;
      number -= 1;
    }
    return result;
  }
  let finalResult = factorialCalculator(num1) / factorialCalculator(num2);
  console.log(finalResult.toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);
