function barIncome(arr) {
  let income = 0;

  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<qty>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/;
  for (line of arr) {
    if (line !== "end of shift") {
      let result = pattern.exec(line);

      if (result) {
        let quantity = result.groups.qty;
        let singlePrice = result.groups.price;
        let pricePerCustomer = quantity * singlePrice;
        console.log(
          `${result.groups.customer}: ${
            result.groups.product
          } - ${pricePerCustomer.toFixed(2)}`
        );
        income += pricePerCustomer;
      }
    }
  }
  console.log(`Total income: ${income.toFixed(2)}`);
}

barIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
