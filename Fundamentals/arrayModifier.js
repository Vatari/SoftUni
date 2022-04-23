function arrayModifier(arr) {
  let numbers = arr.shift().split(" ").map(Number);

  while (arr[0] != "end") {
    let tokens = arr.shift().split(" ");
    let command = tokens[0];
    let index1 = +tokens[1];
    let index2 = +tokens[2];

    if (command === "swap") {
      swap(numbers, index1, index2);
    }
    if (command === "multiply") {
      multiply(numbers, index1, index2);
    }
    if (command === "decrease") {
      decrease(numbers);
    }
  }
  console.log(numbers.join(", "));

  function decrease(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i]--;
    }
    return arr;
  }

  function multiply(arr, index1, index2) {
    arr[index1] *= arr[index2];
    return arr;
  }
  function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  }
}
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
