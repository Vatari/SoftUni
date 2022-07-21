function maxSequenceOfEqualElements(arr) {
  let newArr = [];
  let tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    tempArr = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        tempArr.push(arr[j]);
      } else {
        break;
      }
      if (tempArr.length > newArr.length) {
        newArr = tempArr;
      }
    }
  }
  console.log(newArr.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
