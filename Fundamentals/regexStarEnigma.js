function starEnigma(arr) {
  let messages = arr;
  let info = {
    A: [],
    D: [],
  };
  messages.forEach((text) => {
    let decryptedMessage = decrypt(text);
    messageCheck(decryptedMessage);
  });
  printResult(info);
  function decrypt(text) {
    let regEx = /[star]/gi;
    let symbol = text.match(regEx);
    let count = 0;
    if (symbol) {
      count = symbol.length;
    }
    let decryptedMessage = "";
    for (let i of text) {
      let code = i.charCodeAt() - count;
      decryptedMessage += String.fromCharCode(code);
    }
    return decryptedMessage;
  }
  function messageCheck(text) {
    let regEx =
      /@([A-za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/g;
    let message = regEx.exec(text);
    if (message) {
      info[message[3]].push(message[1]);
    }
  }
  function printResult(obj) {
    let attacked = obj["A"];
    let destroyed = obj["D"];
    console.log(`Attacked planets: ${attacked.length}`);
    printSorted(attacked);
    console.log(`Destroyed planets: ${destroyed.length}`);
    printSorted(destroyed);
    function printSorted(arr) {
      arr.sort((a, b) => a.localeCompare(b));
      arr.forEach((planet) => {
        console.log(`-> ${planet}`);
      });
    }
  }
}
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
