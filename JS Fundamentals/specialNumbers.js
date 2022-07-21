function specialNumbers(n) {
  for (let num = 1; num <= n; num++) {
    numAsString = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
      sum += Number(numAsString[i]);
    }

    let isSpecial = false;

    if (sum == 5 || sum == 7 || sum == 11) {
      isSpecial = true;
    }
    if (isSpecial) {
      console.log(`${num} -> True`);
    } else {
      console.log(`${num} -> False`);
    }
  }
}

specialNumbers(15);
//specialNumbers(20);
