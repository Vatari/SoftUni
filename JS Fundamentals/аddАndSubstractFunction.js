function addAndSubstractFunction(num1, num2, num3) {
  function sum2Int(n1, n2) {
    return n1 + n2;
  }
  function substract(n1, n2, n3) {
    let result = sum2Int(n1, n2);
    return result - n3;
  }

  console.log(substract(num1, num2, num3));
}
addAndSubstractFunction(23, 6, 10);
addAndSubstractFunction(1, 17, 30);
