function distinctArray(arr) {
  let newArr = [];

  for (let el of arr) {
    if (!newArr.includes(el)) newArr.push(el);
  }
  console.log(newArr.join(" "));
}
distinctArray([1, 2, 3, 4, 4]);
