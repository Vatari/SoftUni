function furniture(arr) {
  let pattern = new RegExp(
    ">>(?<product>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<qty>[\\d]+)"
  );
  let command = arr.shift();
  let product = [];
  let moneySpent = 0;
  let totalSum = 0;
  let qty = 0;

  while (command !== "Purchase") {
    let result = pattern.exec(command);

    if (result !== null) {
      product.push(result.groups["product"]);
      moneySpent = Number(result.groups["price"]);
      qty = +result.groups["qty"];
      totalSum += moneySpent * qty;
    }

    command = arr.shift();
  }

  console.log("Bought furniture:");

  if (product.length > 0) {
    console.log(product.join("\n"));
  }

  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
