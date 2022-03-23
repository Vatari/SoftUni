function solve(arr) {
  /*   Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements 
       until a single number is obtained. 
       Examples :
       For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, 
       then we sum again all adjacent elements and obtain {12+13} = {25}. */
  let condensed = [];
  for (let num of arr) {
    condensed.push(num);
  }
  while (condensed.length > 1) {
    let tempArr = [];
    for (let i = 0; i < condensed.length - 1; i++) {
      tempArr.push(condensed[i] + condensed[i + 1]);
    }
    condensed = tempArr;
  }
  console.log(condensed.join());
}
solve([5, 0, 4, 1, 2]);
