function loadingBarFunctionFunc(n) {
  let newArr = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  let number = n / 10;
  for (let i = 0; i < number; i++) {
    newArr.unshift("%");
    newArr.pop(i);
  }

  let result = newArr.join("");
  if (n < 100) {
    console.log(`${n}% [${result}]`);
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log(`[${result}]`);
  }
}
/* loadingBarFunctionFunc(30);
loadingBarFunctionFunc(50); */
loadingBarFunctionFunc(100);
