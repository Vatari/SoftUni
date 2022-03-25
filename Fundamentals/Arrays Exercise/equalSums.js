function solve(arr) {
  /* Write a function that determines if there exists an element in the array of numbers such that the sum 
    of the elements on its left is equal to the sum of the elements on its right. 
    If there are NO elements to the left/right, their sum is 0. 
    Print the index that satisfies the required condition or "no" if there is no such index. */

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
solve([1, 2, 3, 3]);
