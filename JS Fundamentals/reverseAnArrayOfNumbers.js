function reverseAnArrayOfNumbers(n, arr) {
  let newArr = [];
  let output = " ";
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }

  for (let k = newArr.length - 1; k >= 0; k--) {
    output += newArr[k];
    output += " ";
  }

  console.log(output);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
