function solve(arr, magicNum) {
  //   Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

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
