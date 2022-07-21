function operationsBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operator = input[2];

  switch (operator) {
    case "+":
      if ((N1 + N2) % 2 === 0) {
        console.log(`${N1} + ${N2} = ${N1 + N2} - even`);
      } else {
        console.log(`${N1} + ${N2} = ${N1 + N2} - odd`);
      }
      break;
    case "-":
      if ((N1 - N2) % 2 === 0) {
        console.log(`${N1} - ${N2} = ${N1 - N2} - even`);
      } else {
        console.log(`${N1} - ${N2} = ${N1 - N2} - odd`);
      }
      break;
    case "*":
      if ((N1 * N2) % 2 === 0) {
        console.log(`${N1} * ${N2} = ${N1 * N2} - even`);
      } else {
        console.log(`${N1} * ${N2} = ${N1 * N2} - odd`);
      }
      break;
    case "/":
      if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        console.log(`${N1} / ${N2} = ${(N1 / N2).toFixed(2)}`);
      }
      break;
    case "%":
      if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        console.log(`${N1} % ${N2} = ${N1 % N2}`);
      }
      break;
  }
}
operationsBetweenNumbers(["10", "12", "+"]);
