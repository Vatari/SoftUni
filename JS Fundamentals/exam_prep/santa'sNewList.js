function solve(arr) {
  let children = {};

  while (arr[0] !== "END") {
    let line = arr.shift().split("->");
    let child = line[0];
    let toy = line[1];
    let count = +line[2];

    if (child !== "Remove") {
      children[child] = { toy: [], count };
      children[child].toy.push(toy, count);

      children[child].count += count;
    } else {
      let newChild = line[1];
      if (children.hasOwnProperty(newChild)) {
        delete children.newChild;
      }
    }

    //children[child].toy.push(count);
  }

  console.log(children);
}
solve([
  "Teddy->Clothes->8",
  "Johny->Toys->10",
  "Freddie->Candy->30",
  "Johny->Candy->20",
  "Carrie->Phone->1",
  "Carrie->Tablet->1",
  "Carrie->Candy->10",
  "Teddy->Toys->5",
  "Remove->Teddy",
  "END",
]);
