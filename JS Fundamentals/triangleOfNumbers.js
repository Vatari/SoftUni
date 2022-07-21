function triangleOfNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";

    for (let c = 1; c <= i; c++) {
      str += i + " ";
    }
    console.log(str);
  }
}
triangleOfNumbers(6);
