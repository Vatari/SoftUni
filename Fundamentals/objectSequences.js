function sequences(arr) {
  arr = arr.map((el) => JSON.parse(el));
  arr.forEach((el) => el.sort((a, b) => b - a));
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i];
    let isUnique = true;
    for (let j = 0; j < outputArr.length; j++) {
      let nextArray = outputArr[j];
      if (nextArray.toString() === currentArray.toString()) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      outputArr.push(currentArray);
    }
  }
  outputArr.sort((a, b) => a.length - b.length);
  outputArr.forEach((el) => console.log(`[${el.join(", ")}]`));
}

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
