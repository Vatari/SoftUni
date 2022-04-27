function commonElements(arr1, arr2) {
  /*   for (let el1 of arr1) {    FOR OF SOLUTION
    for (let el2 of arr2) {
      if (el1 === el2) {
        console.log(el1);
      }
    }
  } */

  for (let i = 0; i < arr1.length; i++) {
    //PURE FOR CYCLE SOLUTION
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
      }
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
