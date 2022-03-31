function solve(arr) {
  let plantCount = +arr.shift();

  let plants = {
      'name': '', 
      rarity: '', 
      rating: 0,
  };
  for (let i = 0; i < plantCount; i++) {
    let [name, rarity] = arr.shift().split("<->");
    let rating = +arr.shift();
    plants.name = name;
    plants.rarity = rarity;
    plants.rating = rating;
}


  for (el of arr) {  
  let command = arr.shift().split(':')
    let [name, rating] = arr.shift().split(" - ");
    
    if (command[0] === 'Rate') {
        plants.rating = +rating;
        }
    if (command[0] === 'Update') {
        plants.rarity = rarity;
        }
    if (command[0] === 'Reset') {
        plants.rating = 0;
        }
    }

}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
