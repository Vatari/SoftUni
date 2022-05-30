function treasureFind(arr) {
  let text = arr.shift().split(" ");

  for (let line of arr) {
    let result = "";
    let position = 0;
    let treasure;
    let coordinates;
    if (line === "find") {
      break;
    }
    line.split("").forEach((symbol) => {
      if (position === text.length) {
        position = 0;
      }
      symbol = symbol.charCodeAt() - text[position];
      result += String.fromCharCode(symbol);
      position++;
    });
    treasure = result.substring(
      result.indexOf("&") + 1,
      result.lastIndexOf("&")
    );
    coordinates = result.substring(
      result.indexOf("<") + 1,
      result.lastIndexOf(">")
    );
    console.log(`Found ${treasure} at ${coordinates}`);
  }
}

treasureFind([
  "1 2 1 3",
  "ikegfpjpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);

/* function treasureFinder(arr) {
  let key = arr.shift().split(' ');
  let container = [];
  let index = 0;
  for (let curr of arr) {
      if (curr == 'find') {
          break;
      }
      let decryptMessage = '';
      for (let char of curr) {
          let code = char.charCodeAt();
          code -= Number(key[index]);
          let searchedSymbol = String.fromCharCode(code);
          decryptMessage += searchedSymbol;
          index++;
          if (index == key.length) {
              index = 0;
          }
      }
      container.push(decryptMessage);
      index = 0;
  }
  for (let curr of container) {
      let tokens = curr.split('&');
      let type = tokens[1];
      let coordinates = tokens[2].split('<')[1].split('');
      let trash = coordinates.pop();
      console.log(`Found ${type} at ${coordinates.join('')}`);
  }
} */
