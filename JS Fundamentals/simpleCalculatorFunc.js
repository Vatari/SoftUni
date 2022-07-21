function simpleCalculatorFunc(num1, num2, operation) {
  let result = 0;

  switch (operation) {
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
  }
  return result;
}
simpleCalculatorFunc(5, 5, "multiply");
simpleCalculatorFunc(40, 8, "divide");
simpleCalculatorFunc(12, 19, "add");
simpleCalculatorFunc(50, 13, "subtract");
