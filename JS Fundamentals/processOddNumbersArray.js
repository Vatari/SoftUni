function processOddNumbers(arr) {
  function oddElementsDoubled(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 != 0) {
        arr[i] *= 2;
        newArr.push(arr[i]);
      }
    }
    return newArr.reverse().join(" ");
  }
  console.log(oddElementsDoubled(arr));
}
processOddNumbers([10, 33, 20, 25]);
