function netherRealms(text) {
  let book = {};
  let pattern = /\s*,\s*/g;
  let demonName = text.split(pattern);

  let nameCheck = /[^\s ,]+/;
  for (let name of demonName) {
    if (nameCheck.test(name)) {
      let patternHealth = /[^0-9\+\-\*\/\.]/g;
      let healthSum = name.match(patternHealth);
      let demonHealth = 0;
      for (let el of healthSum) {
        let value = el.charCodeAt(0);
        demonHealth += value;
      }

      let demonPower = 0;
      let patternPower = /[\+\-]*\d+(\.\d+)*/g;
      let powerSum = name.match(patternPower);
      if (powerSum == null) {
        demonPower = 0;
      } else {
        let power = powerSum.map(Number);
        power.map((x) => (demonPower += x));
      }
      let divisionCheck = /[\*\/]/g;
      let divideMatches = name.match(divisionCheck);
      if (divideMatches != null) {
        for (let el of divideMatches) {
          if (el == "*") {
            demonPower *= 2;
          } else if (el == "/") {
            demonPower /= 2;
          }
        }
      }

      if (!book.hasOwnProperty(name)) {
        book[name] = [demonHealth, demonPower];
      }
    } else {
      continue;
    }
  }
  let sorted = Object.entries(book);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, arr] of sorted) {
    console.log(`${name} - ${arr[0]} health, ${arr[1].toFixed(2)} damage`);
  }
}
netherRealms("M3ph1st0**, Azazel");
