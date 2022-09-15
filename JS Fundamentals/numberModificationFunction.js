function numberModification(num) {
  while (getAverage(num) < 5) {
    num += "9";
  }
  console.log(num);

  function sum(number) {
    let numToString = number.toString();
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
      sum += Number(numToString[i]);
    }
    return sum;
  }

  function getAverage(num) {
    return sum(num) / num.toString().length;
  }
}

numberModification(202);
numberModification(317);

