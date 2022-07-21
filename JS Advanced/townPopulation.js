function solve(arr) {
  const registry = {};

  for (el of arr) {
    let [town, population] = el.split(" <-> ");
    population = Number(population);
    if (!registry[town]) {
      registry[town] = population;
    } else {
      registry[town] += population;
    }
  }
  for (town in registry) {
    console.log(`${town} : ${registry[town]}`);
  }
}
solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
