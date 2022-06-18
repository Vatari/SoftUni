function solve(...arr) {
  let counter = {};

  let result = arr.map((x) => {
    counter[typeof x] = (counter[typeof x] || 0) + 1;
    return `${typeof x}: ${x}`;
  });

  result.forEach((x) => console.log(x));
  Object.entries(counter)
    .sort((x, y) => y[1] - x[1])
    .map(([type, count]) => console.log(`${type} = ${count}`));
}

solve("cat", 42, function () {
  console.log("Hello world!");
});
