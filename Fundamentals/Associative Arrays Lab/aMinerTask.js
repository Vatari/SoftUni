function solve(arr) {
  let result = {};

  for (i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      resource = arr[i];
      if (result.hasOwnProperty(resource)) {
        result[arr[i]] += +arr[i + 1];
      } else {
        result[arr[i]] = +arr[i + 1];
      }
    }
  }
  for (el in result) {
    console.log(`${el} -> ${result[el]}`);
  }
}
solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
