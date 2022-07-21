function signCheckFunc(num1, num2, num3) {
  /*   let result2 = "";
   */
  let result = num1 * num2 * num3;

  if (result < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }

  /*   if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    result2 = "Positive";
  } else {
    result2 = "Negative";
  }
  console.log(result2); */
}
signCheckFunc(5, 12, -15);
signCheckFunc(-6, -12, 14);
signCheckFunc(-1, -2, -3);
signCheckFunc(-5, 1, 1);
