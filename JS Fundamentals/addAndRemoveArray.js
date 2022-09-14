function addAndRemoveArray(input) {
  let newArr = [];
  let num = 0;
  /* 
  for (let i = 0; i < input.length; i++) {
    let command = input[i];

    num++;
    if (command === "add") {
      newArr.push(num);
    } else if (command === "remove") {
      newArr.pop(command);
    }
  }
  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  } */

  for (el of input) {
    num++;
    if (el === "add") {
      newArr.push(num);
    } else {
      newArr.pop(el);
    }
  }
  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}
addAndRemoveArray(["add", "add", "add", "add"]);
addAndRemoveArray(["add", "add", "remove", "add", "add", "remove"]);
