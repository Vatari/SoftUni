function solve(arr, rotations) {
  /*  Write a function that receives an array and the number of rotations you have to perform. 
    Note: Depending on the number of rotations, the first element goes to the end.
    Output: 
    Print the resulting array elements separated by a single space. */

  for (let i = 0; i < rotations; i++) {
    arr.push(arr.shift());
  }
  console.log(arr.join(" "));
}
solve([32, 21, 61, 1], 4);
