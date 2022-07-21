function barcodeGenerator(arg) {
  let numA = arg[0] + "";
  let numB = arg[1] + "";

  let a1 = Number(numA[0]);
  let a2 = Number(numA[1]);
  let a3 = Number(numA[2]);
  let a4 = Number(numA[3]);

  let b1 = Number(numB[0]);
  let b2 = Number(numB[1]);
  let b3 = Number(numB[2]);
  let b4 = Number(numB[3]);

  let buffer = "";

  for (let a = a1; a <= b1; a++) {
    for (let b = a2; b <= b2; b++) {
      for (let c = a3; c <= b3; c++) {
        for (let d = a4; d <= b4; d++)
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            buffer = buffer + a + b + c + d + " ";
          }
      }
    }
  }
  console.log(buffer);
}
barcodeGenerator([2345, 6789]);
