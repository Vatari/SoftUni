function netherRealms(arr) {
  let demonsCollection = {};
  let demons = arr.shift().split(",");
  demons.forEach((demon) => {
    demon = demon.trim();
    demonsCollection[demon] = [];
    healthCalc(demon);
    attackCalc(demon);
  });
  printSorted(demonsCollection);
  function healthCalc(demon) {
    let health = 0;
    let chars = demon.match(/[^0-9+\-*/\.]/g);
    if (chars) {
      chars.forEach((char) => {
        health += char.charCodeAt();
      });
    }
    demonsCollection[demon].push(health);
  }
  function attackCalc(demon) {
    let attack = 0;
    let newArr = demon.match(/-?\d+\.?\d*/g);
    if (newArr) {
      newArr = newArr.map((n) => Number(n));
      newArr.forEach((el) => {
        attack += el;
      });
    }
    let symbol = demon.match(/[\*\/]/g);
    if (symbol) {
      symbol.forEach((el) => {
        if (el === "*") {
          attack *= 2;
        } else if (el === "/") {
          attack /= 2;
        }
      });
    }
    demonsCollection[demon].push(attack);
  }
  function printSorted(demons) {
    demons = Object.entries(demons);
    demons.sort((a, b) => a[0].localeCompare(b[0]));
    demons.forEach((demon) => {
      console.log(
        `${demon[0]} - ${demon[1][0]} health, ${demon[1][1].toFixed(2)} damage`
      );
    });
  }
}

netherRealms(["M3ph1st0**,    Azazel"]);
netherRealms(["M3ph-0.5s-0.5t0.0**"]);
netherRealms(["Gos/ho"]);
