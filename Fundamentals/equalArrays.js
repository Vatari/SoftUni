function equalArrays(arr1, arr2) {
  let sum = 0;
  let areEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    result = Number(arr1[i]);
    sum += result;

    if (arr1[i] !== arr2[i]) {
      areEqual = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }

  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
