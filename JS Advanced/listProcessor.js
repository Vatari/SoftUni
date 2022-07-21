function solve(input) {
  let result = [];

  let obj = {
    add: (str) => result.push(str),
    remove: (str) => (result = result.filter((x) => x !== str)),
    print: () => console.log(result.join(",")),
  };

  /* input.forEach((x => {
    let [command, str] = x.split(" ");

    obj[command](str);
})) */

  for (el of input) {
    let [command, str] = el.split(" ");

    obj[command](str);
  }
}
solve(["add hello", "add again", "remove hello", "add again", "print"]);
