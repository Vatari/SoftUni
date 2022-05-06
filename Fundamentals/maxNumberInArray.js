function maxNumberInArray(arr) {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    currentInt = arr[i];
    let isTopInt = true;
    for (j = i + 1; j < arr.length; j++) {
      nextInt = arr[j];
      if (currentInt <= nextInt) {
        isTopInt = false;
        break;
      }
    }
    if (isTopInt) {
      newArr.push(currentInt);
    }
  }
  console.log(newArr.join(" "));
}
maxNumberInArray([1, 4, 3, 2]);
maxNumberInArray([14, 24, 3, 19, 15, 17]);
maxNumberInArray([41, 41, 34, 20]);
maxNumberInArray([27, 19, 42, 2, 13, 45, 48]);
