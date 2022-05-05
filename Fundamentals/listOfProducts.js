function listOfProducts(arr) {
  function revList(arr) {
    arr.sort();
    let newArr = [];

    for (i = 0; i < arr.length; i++) {
      newArr.push(`${i + 1}.${arr[i]}`);
    }
    return newArr.join("\n");
  }
  console.log(revList(arr));
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
