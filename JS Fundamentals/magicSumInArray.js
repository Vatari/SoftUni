function magicSumInArray(arr, magicNum) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == magicNum) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}
magicSumInArray([1, 7, 6, 2, 19, 23], 8);
magicSumInArray([14, 20, 60, 13, 7, 19, 8], 27);
