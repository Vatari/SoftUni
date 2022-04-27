function convertToObject(text) {
  let obj = JSON.parse(text);

  let tokens = Object.keys(obj);

  for (token of tokens) {                                 //keys solution
    console.log(`${token}: ${obj[token]}`);
  }

  /*    for (let [key, value] of tokens) {         // entries solution
       console.log(`${key}: ${value}`);
   }
 */
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
