function sum(arr) {
  let total = 0;

  for (let num of arr) {
    total += Number(num);
  }
  return total;
}
module.exports = {
    sum,
}
