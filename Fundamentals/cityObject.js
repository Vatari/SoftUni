function city(cityObj) {
  let props = Object.keys(cityObj);

  for (prop of props) {
    console.log(`${prop} -> ${cityObj[prop]}`);
  }
}
city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
