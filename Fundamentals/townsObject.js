function towns(arr) {
  /*   class City {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude.toFixed(2);
      this.longitude = longitude.toFixed(2);
    }
  } */
  for (el of arr) {
    let [town, latitude, longitude] = el.split(" | ");
    latitude = +latitude;
    longitude = +longitude;
    let newTown = {
      town,
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2),
    };
    console.log(newTown);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
