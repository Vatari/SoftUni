function rotateArray(arr) {
  let lastEl = +arr.pop();

  for (let i = 0; i < lastEl; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
