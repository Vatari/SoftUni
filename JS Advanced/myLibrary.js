var myLibrary = {
  sumArray: function (arr) {
    let sum = arr.reduce((acc, x) => acc + x, 0);
    return sum;
  },
  areEqualsInArray: function (arr) {
    let equal = arr.every((x) => x === arr[0]);
    return equal;
  },
  averageInArray: function (arr) {
    let average = arr.reduce((acc, x) => acc + x / arr.length, 0);
    return average;
  },
  oddNumbersInArr: function (arr) {
    let oddNumbers = arr.reduce((acc, x) => {
      if (x % 2 != 0) {
        acc.push(x);
      }
      return acc;
    }, []);
    return oddNumbers;
  },
};

let array = [1, 23, 4, 54, 6, 756, 456, 456, 456, 456];

console.log(myLibrary.sumArray(array));
console.log(myLibrary.areEqualsInArray(array));
console.log(myLibrary.averageInArray(array));
console.log(myLibrary.oddNumbersInArr(array));
