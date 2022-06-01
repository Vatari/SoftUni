function triangleArea(num1, num2, num3) {
  let n = (num1 + num2 + num3) / 2;
  let area = Math.sqrt(n * ((n - num1) * (n - num2) * (n - num3)));
  console.log(area);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
