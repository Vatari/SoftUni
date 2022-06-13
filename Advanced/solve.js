function solution(num) {
  let origin = num;

  function sum(n) {
    return origin + n;
  }
  return sum;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
