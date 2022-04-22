function amazingNumbers(num) {
  num = num.toString();
  let sum = 0;
  isAmazing = false;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  sum = sum.toString();

  for (j = 0; j < sum.length; j++) {
    if (sum[j] == 9) {
      isAmazing = true;
    }
  }

  let output = isAmazing ? `${num} Amazing? True` : `${num} Amazing? False`;
  console.log(output);
}

amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(9);
