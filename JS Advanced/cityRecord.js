function solve(...params) {
  let registry = {};
  let [city, population, treasury] = [...params];

  registry.name = city;
  registry.population = population;
  registry.treasury = treasury;

  return registry;
}

solve("Tortuga", 7000, 15000);
