function solve(arr, arr2) {
  /*Write a function, which prints common elements in two string arrays. Print all matches on separate lines. 
    Compare the first array with the second array. */

  for (el of arr) {
    for (el1 of arr2) {
      if (el === el1) {
        console.log(el);
      }
    }
  }
}
solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
