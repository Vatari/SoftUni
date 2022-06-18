function solve(arr) {
  let result = [];
  arr.shift();
  for (line of arr) {
    let [town, lat, lon] = line.split(" | ");
    town = town.slice(2);
    lon = lon.slice(0, -2);
    lat = Number(lat).toFixed(2);
    lon = Number(lon).toFixed(2);
    let towns = {};
    towns.Town = town;
    towns.Latitude = Number(lat);
    towns.Longitude = Number(lon);
    result.push(towns);
  }
  console.log(JSON.stringify(result));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
