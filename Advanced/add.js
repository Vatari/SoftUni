function solution(num) {
  let original = num;

  return function add(n) {
    return original + n;
  };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
