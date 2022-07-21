function solve(arr) {
  let result = [];
  let count = 1;

  for (command of arr) {
    if (command === "add") {
      result.push(count);
    } else if (command === "remove") {
      result.pop();
    }
    count++;
  }
  if (result.length == 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
