function sorting(arr) {
  let sortedArr = [];
  arr.sort((a, b) => b - a);
  while (arr.length > 0) {
    let biggest = arr.shift();
    let smallest = arr.pop();
    sortedArr.push(biggest, smallest);
  }
//  sortedArr.push(arr.join(" "));
  console.log(sortedArr.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
