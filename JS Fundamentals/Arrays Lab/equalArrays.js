function solve(arr, arr1) {
  /*   Write a program, which receives two string arrays containing number representations, and prints on the console whether they are identical.
    Arrays are identical if their elements at same indexes are equal. If they are identical, find the sum of the first array and print the following message: 
    `Arrays are identical. Sum: {sum}`
     If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
    `Arrays are not identical. Found difference at {index} index` */

  let sum = 0;
  arr1 = arr1.map(Number);
  arr = arr.map(Number);

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr1[i]) {
      sum += arr[i];
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}
//solve(["10", "20", "30"], ["10", "20", "30"]);
solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
