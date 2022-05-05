function lastKNumbersSequence(n, k) {
  function kSequence(n, k) {
    let result = [1];

    for (i = 0; i < n - 1; i++) {
      let lastK = result.slice(-k);
      let sum = 0;
      for (let el of lastK) {
        sum += el;
      }
      result.push(sum);
    }
    return result.join(" ");
  }
  console.log(kSequence(n, k));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
