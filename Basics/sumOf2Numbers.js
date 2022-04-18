function sumOf2Numbers(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let magickNumber = Number(input[2]);

  let isFound = false;
  let counter = 0;

  for (let x = startNumber; x <= endNumber; x++) {
    for (let y = startNumber; y <= endNumber; y++) {
      let sum = x + y;
      counter++;
      if (sum === magickNumber) {
        isFound = true;
        console.log(`Combination N:${counter} (${x} + ${y} = ${magickNumber})`);

        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magickNumber}`);
  }
}
sumOf2Numbers(["1", "10", "5"]);
