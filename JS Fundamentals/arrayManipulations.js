function arrayManipulations(arr) {
  let newArr = arr.shift().split(" ").map(Number);
  for (let i = 0; i < arr.length; i++) {
    let [command, firstNum, secondNum] = arr[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (command) {
      case "Add":
        add(firstNum);
        break;
      case "Remove":
        remove(firstNum);
        break;
      case "RemoveAt":
        removeAt(firstNum);
        break;
      case "Insert":
        insertAt(firstNum, secondNum);
        break;
    }
  }
  function add(el) {
    newArr.push(el);
  }
  function remove(num) {
    newArr = newArr.filter((el) => el !== num);
  }
  function removeAt(index) {
    newArr.splice(index, 1);
  }
  function insertAt(firstNum, secondNum) {
    newArr.splice(secondNum, 0, firstNum);
  }

  console.log(newArr.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
