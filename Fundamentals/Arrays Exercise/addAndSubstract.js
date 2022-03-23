function solve(arr) {
  /*  Write a function, which changes the value of odd and even numbers in an array of numbers. 
•	If the number is even - add to its value its index position
•	If the number is odd - substract to its value its index position
    Output 
    On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
    on the third line print the sum of numbers from the modified array.
 */
  let newArr = [];

  let originalSum = 0;
  let newSum = 0;

  for (i = 0; i < arr.length; i++) {
    originalSum += arr[i];
    let current = arr[i];

    if (current % 2 == 0) {
      newArr.push(current + i);
    } else {
      newArr.push(current - i);
    }
    newSum += newArr[i];
  }
  console.log(newArr);
  console.log(originalSum);
  console.log(newSum);
}
solve([5, 15, 23, 56, 35]);
