function solve(arr) {
  /*   Write a function that determines if there exists an element in the array of numbers 
  such that the sum of the elements on its left is equal to the sum of the elements on its right. 
  If there are NO elements to the left/right, their sum is 0. 
  Print the index that satisfies the required condition or "no" if there is no such index. */

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
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
