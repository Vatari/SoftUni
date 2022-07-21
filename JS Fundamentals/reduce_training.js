let arr = [1, 2, 3, 4,4];

let sum = arr.reduce((a, x) => a + x, 0);
let average = arr.reduce((a, x) => a + x / arr.length, 0);
let oddNumbers = arr.reduce((a, x) => {
  if (x % 2 != 0) {
    a.push(x);
  }
  return a;
}, []);

let findSingleNumber = function (nums) {
  let result = nums.reduce((a, x) => {
    a ^= x;
    return a;
  });
  return result;
};

console.log(oddNumbers);
