function solve(arr, arr1) {
  /*  Write a function, which receives two string arrays and merges them into a third array.  
    •	If the index of the element is even, add into the third array the sum of both elements at that index
    •	If the index of the element is odd, add the concatenation of both elements at that index
    Input
    As input, you will receive two string arrays (with equal length).
    Output
    As output, you should print the resulting third array, each element separated by " - ".
     */

  let newArr = [];
  let sumEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      newArr.push(+arr[i] + +arr1[i]);
    } else {
      newArr.push(arr[i] + arr1[i]);
    }
  }
  console.log(newArr.join(" - "));
}
solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
