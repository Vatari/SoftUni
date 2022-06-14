function solve(size) {
  "use strict";
  if (size <= 0) {
    size = 5;
  }
  let result = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      result += " *";
    }
    result += "\n";
  }
  console.log(result);
}
solve(3);
