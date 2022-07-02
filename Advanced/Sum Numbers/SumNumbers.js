function calc() {
  let n1 = document.getElementById("num1");
  let n2 = document.getElementById("num2");
  let result = document.getElementById("sum");
  let sum = +n1.value + +n2.value;
  result.value = sum;
}
