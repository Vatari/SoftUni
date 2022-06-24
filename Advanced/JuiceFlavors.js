function solve(arr) {
  let juices = {};
  let bottles = {};

  let bottleAdd = (juice, qty) => {
    let bottle = (qty - (qty % 1000)) / 1000;

    if (bottle > 0) {
      bottles[juice] = (bottles[juice] || 0) + bottle;
      return qty % 1000;
    }

    return qty;
  };

  arr.forEach((x) => {
    let [name, quantity] = x.split(" => ");
    juices[name] = juices[name] || 0;

    juices[name] = bottleAdd(name, juices[name] + Number(quantity));
  });

  return Object.entries(bottles)
    .map(([name, quantity]) => `${name} => ${quantity}`)
    .join("\n");
}
solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);

console.log(
  solve([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549",
  ])
);
