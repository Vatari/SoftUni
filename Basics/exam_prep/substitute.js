function substitute(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);
  let num4 = Number(input[3]);

  let current = 0;

  for (let k = num1; k <= 8; k++) {
    for (let l = 9; l >= num2; l--) {
      for (let m = num3; m <= 8; m++) {
        for (let n = 9; n >= num4; n--) {
          if (k == m && l == n && k % 2 == 0 && l % 2 != 0) {
            console.log("Cannot change the same player.");
          } else if (k % 2 == 0 && l % 2 != 0 && m % 2 == 0 && n % 2 != 0) {
            console.log(`${k}${l} - ${m}${n}`);
            current++;
          }
          if (current == 6) {
            break;
          }
        }
        if (current == 6) {
          break;
        }
      }
      if (current == 6) {
        break;
      }
    }
    if (current == 6) {
      break;
    }
  }
}

substitute(["6", "7", "5", "6"]);
