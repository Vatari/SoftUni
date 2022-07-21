function list(arr) {
  const result = arr.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < result.length; i++) {
    console.log(`${i + 1}.${result[i]}`);
  }
}
list(["John", "Bob", "Christina", "Ema"]);
