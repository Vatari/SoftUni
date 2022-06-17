function solve(arr, criteria) {
  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  return arr
    .slice()
    .map((x) => x.split("|"))
    .map(
      ([destination, price, status]) =>
        new Tickets(destination, Number(price), status)
    )
    .sort((a, b) => {
      return typeof a[criteria] === "number"
        ? a[criteria] - b[criteria]
        : a[criteria].localeCompare(b[criteria]);
    });
}

solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
