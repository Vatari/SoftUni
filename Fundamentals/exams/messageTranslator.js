function messageTranslator(arr) {
  let unused = arr.shift();
  let pattern = /\!([A-Z][a-z]+)\!:\[([A-Za-z]+)\]/;
  let newArr = [];
  while (arr.length > 0) {
    let line = arr.shift();
    let match = pattern.exec(line);

    if (match === null) {
      console.log("The message is invalid");
    } else {
      let text = match[2];
      for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        newArr.push(code);
      }

      console.log(`${match[1]}: ${newArr.join(" ")}`);
    }
  }
}

messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
