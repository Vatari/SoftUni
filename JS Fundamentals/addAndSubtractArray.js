function addAndSubtract(arr) {
  let newArr = [];
  let sumOriginal = 0;
  let sumNew = 0;

  for (i = 0; i < arr.length; i++) {
    sumOriginal += arr[i];

    if (arr[i] % 2 == 0) {
      newArr.push((arr[i] += i));
    } else {
      newArr.push((arr[i] -= i));
    }
  }
  for (let n of newArr) {
    sumNew += n;
  }
  console.log(newArr);
  console.log(sumOriginal);
  console.log(sumNew);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
addAndSubtract([-25, 31, 113, 10, 72]);

