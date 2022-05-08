function negativeOrPositiveNumbers(arr) {
  function arrSort(arr) {
    let arr2 = [];
    //let newArr = arr.map(Number);
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr2.unshift(arr[i]);
      } else if (arr[i] >= 0) {
        arr2.push(arr[i]);
      }
    }
    return arr2 //.join("\n");
  }
  console.log(arrSort(arr).join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
