function combinations(input) {
  let n = Number(input[0]);
  let validCount = 0;
  let flag = false;

  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      for (let z = 0; z <= n; z++) {
        let sum = x + y + z;
        if (sum === n) {
          validCount++;
        }
      }
    }
  }

  console.log(validCount);
}
combinations(["5"]);
