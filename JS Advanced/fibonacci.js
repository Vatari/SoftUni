function solve() {
  let nums = [0, 0];

  return () => {
    const result = nums[0] + nums[1];
    nums = [nums[1], nums[1] + nums[0] || 1];
    return result || 1;
  };
}

let fib = solve();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
