function equalSumsArray(arr) {
  let hasEqualSum = false;

  for (let index = 0; index < arr.length; index++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = index - 1; j >= 0; j--) {
      leftSum += arr[j];
    }
    for (let n = index + 1; n < arr.length; n++) {
      rightSum += arr[n];
    }
    if (rightSum === leftSum) {
      console.log(index);
      hasEqualSum = true;
    }
  }
  if (!hasEqualSum) {
    console.log("no");
  }
}
equalSumsArray([1, 2, 3, 3]);
equalSumsArray([1, 2]);
equalSumsArray([1]);
equalSumsArray([1, 2, 3]);
equalSumsArray([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
