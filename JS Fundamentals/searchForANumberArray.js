function searchForANumber(arr, arr1) {
  let [elTake, elDelete, elSearch] = arr1;
  let newArr = takeElement(arr, elTake);
  deleteElement(newArr, elDelete);

  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === elSearch) {
      count++;
    }
  }
  console.log(`Number ${elSearch} occurs ${count} times.`);

  function deleteElement(arr, num) {
    let result = arr.splice(0, num);

    return result;
  }

  function takeElement(arr, num) {
    let result = arr.slice(0, num);
    return result;
  }
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
