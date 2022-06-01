function serializeString(arr) {
  let str = arr[0];
  let chars = [];

  for (let i = 0; i < str.length; i++) {
    if (!chars.includes(str[i])) {
      chars.push(str[i]);
    }
  }

  while (chars.length > 0) {
    let char = chars.shift();
    let tokens = [];

    for (let i = 0; i < str.length; i++) {
      if (char === str[i]) {
        tokens.push(i);
      }
    }

    console.log(char + ":" + tokens.join("/"));
  }
}

serializeString(["avjavamsdmcalsdm"]);
