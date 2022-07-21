function sumFirstAndLastArray(arr) {
  function sum1AndLast(arr) {
    let newArr = arr.map(Number);
    let first = newArr.shift();
    let last = newArr.pop();
    let result = first + last;
    return result;
  }
  console.log(sum1AndLast(arr));
}
sumFirstAndLastArray(["20", "30", "40"]);
