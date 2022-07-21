function solve(arr) {
  let calories = {};

  /* for (let i = 0; i < arr.length; i++) {
    let fruit = arr[i];
    i++;
    let weight = Number(arr[i]);
    calories[fruit] = weight;
  } */

  arr.filter((x, i) => {
    if (i % 2 == 0) {
      calories[arr[i]] = Number(arr[i + 1]);
    }
  });

  console.log(calories);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
