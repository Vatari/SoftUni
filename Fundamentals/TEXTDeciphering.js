function decipher(arr) {
  let encryptedText = arr[0];
  let [replaceElement, replacer] = arr[1].split(" ");
  let newText = "";
  let asciiCode = "";

  //decode the text
  for (let el of encryptedText) {
    asciiCode = el.charCodeAt(el) - 3;
    newText += String.fromCharCode(asciiCode);
  }

  //replace word in the string
  while (newText.includes(replaceElement)) {
    newText = newText.replace(replaceElement, replacer);
  }

  //check validity

  for (let char of newText) {
    let currentChar = newText.charCodeAt(char);
    let check = (currentChar >= 100 && currentChar <= 125) || currentChar === 35;
    if (!check) {
      console.log("This is not the book you are looking for.");
      return;
    }
  }
  console.log(newText);
}

decipher([
  "wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw",
  "ec an",
]);

decipher(["arx#vkdww#qrw#sdvv", "t l"]);
