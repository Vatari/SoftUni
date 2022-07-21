function arrayRotation(arr, rotation) {
  temp = 0;

  for (let j = 0; j < rotation; j++) {
    temp = arr.shift(arr[j]);
    arr.push(temp);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
