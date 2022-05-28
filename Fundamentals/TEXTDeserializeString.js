function deserializeString(arr) {
  let text = [];
  for (let el of arr) {
    if (el == "end") {
      break;
    }
    let [letter, symbols] = el.split(":");
    let numbers = symbols.split("/");
    for (let index of numbers) {
      index = +index;
      text[index] = letter;
    }
  }
  console.log(text.join(""));
}
deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
