function travelTime(arr) {
  let result = {};

  for (let line of arr) {
    let [country, town, price] = line.split(" > ");
    if (!result.hasOwnProperty(country)) {
      result[country] = {};
    }
    if (!result[country].hasOwnProperty(town)) {
      result[country][town] = Number.POSITIVE_INFINITY;
    }
    if (result[country].hasOwnProperty(town)) {
      if (result[country][town] > Number(price)) {
        result[country][town] = Number(price);
      }
    }
  }
  let sortedCountry = Object.keys(result).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  for (let country of sortedCountry) {
    let temp = "";
    temp += country + " -> ";
    let sortedTowns = Object.keys(result[country]).sort((a, b) => {
      return result[country][a] - result[country][b];
    });
    for (let town of sortedTowns) {
      temp += town + " -> ";
      temp += result[country][town] + " ";
    }
    console.log(temp);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
