function solve(arr) {
  /*   Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 
       Output:
       Print all top integers on the console, separated by a single space. */

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      next = arr[j];

      if (current <= next) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      result.push(current);
    }
  }
  console.log(result.join(" "));
}
solve([1, 4, 3, 2]);
