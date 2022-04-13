function multiplication(input) {
  let number = Number(input[0]);

  for (let num = 1; num <= 10; num++) {
    console.log(`${num} * ${number} = ${num * number}`);
  }
}
multiplication(["5"]);
