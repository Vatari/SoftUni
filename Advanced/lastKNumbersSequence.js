function lastK(n, k) {
  let result = [1];

  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let current = result.slice(start, start + k).reduce((a, b) => a + b, 0);
    result.push(current);
  }

  return result;
}
lastK(6, 3);
