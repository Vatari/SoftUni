function rageQuit(text) {
  let pattern = /(?<str>[\D]+)(?<count>[0-9]+)/g;
  let result = "";
  let unique = new Set();

  while ((arr = pattern.exec(text)) !== null) {
    let { str, count } = arr.groups;

    if (count > 0) {
      for (let symbol of str.toUpperCase()) {
        unique.add(symbol);
      }
    }

    for (let i = 0; i < count; i++) {
      result += str;
    }
  }
  console.log(`Unique symbols used: ${unique.size}`);
  console.log(result.toLocaleUpperCase());
}
rageQuit("aSd2&5s@1");
rageQuit("a3");

/*   let finalText = "";
  let mainPattern = /[\D]+([0-9]+)/g;
  text = text.split(" ").shift().match(mainPattern);
  if (text) {
    let localPattern = /([\D]+)([0-9]+)/;

    for (let el of text) {
      let result = el.match(localPattern);
      let toUpper = result[1].toUpperCase();
      let count = result[2];
      finalText += toUpper.repeat(count);
    }
    let symbolsUsed = Array.from(new Set(finalText));
    console.log(`Unique symbols used: ${symbolsUsed.length}`);
    console.log(finalText);
  } */
