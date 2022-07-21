function messageTranslator(arr) {
  arr.shift();
  let pattern = /\!(?<command>[A-Z][a-z]{3,})\!:\[(?<message>[A-Za-z]{8,})\]/;
  let newArr = [];
  while (arr.length > 0) {
    let line = arr.shift();
    let match = pattern.exec(line);

    if (match === null) {
      console.log("The message is invalid");
    } else {
      let message = match[2];
      for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        newArr.push(code);
      }

      console.log(`${match[1]}: ${newArr.join(" ")}`);
    }
  }
}
messageTranslator([2, "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready]"]);
