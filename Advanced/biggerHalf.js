function solve(arr) {
    let result = arr.sort((a, b) => a - b);
    let half = result.length / 2;
  
    let secondHalf = result.slice(half);
  
    return secondHalf;
  }
solve([3, 19, 14, 7, 2, 19, 6]);
solve([4, 7, 2, 5]);
