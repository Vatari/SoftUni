function sumPrimeNonPrime(input) {
  let sumPrimeNumbers = 0;
  let sumNonPrimeNumbers = 0;

  let index = 0;
  let command = input[index];

  while (command !== "stop") {
    let currentNumber = Number(command);

    if (currentNumber < 0) {
      console.log("Number is negative.");
      index++;
      command = input[index];
      continue;
    }
    let isPrime = true;

    if (currentNumber === 1) {
      sumPrimeNonPrime += currentNumber;
      index++;
      command = input[index];
      continue;
    }

    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      sumPrimeNumbers += currentNumber;
    } else {
      sumNonPrimeNumbers += currentNumber;
    }
    index++;
    command = input[index];
  }
  console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
