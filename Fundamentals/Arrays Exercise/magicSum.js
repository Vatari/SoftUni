function solve(arr, magicNum) {
/*     Write a function that determines if there exists an element in the array of numbers such that the sum 
    of the elements on its left is equal to the sum of the elements on its right. 
    If there are NO elements to the left/right, their sum is 0. 
    Print the index that satisfies the required condition or "no" if there is no such index. */




    for (let i = 0; i < arr.length; i++) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == magicNum) {
          console.log(`${arr[i]} ${arr[j]}`);
        }
      }
    }
  }
  solve([1, 7, 6, 2, 19, 23], 8);
  solve([14, 20, 60, 13, 7, 19, 8], 27);
  solve([1, 2, 3, 4, 5, 6], 6);
  