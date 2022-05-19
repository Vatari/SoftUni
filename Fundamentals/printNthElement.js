function printNthElement(arr) {
  let nStep = Number(arr.pop());

  let newArr = [];
  for (i = 0; i < arr.length; i += nStep) {
    //if (i % 3 == 0) {
    newArr.push(arr[i]);
    // }
  }
  console.log(newArr.join(" "));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
printNthElement(["dsa", "asd", "test", "test", "2"]);
printNthElement(["1", "2", "3", "4", "5", "6"]);
