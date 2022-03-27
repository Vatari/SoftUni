function solve(arr) {
  let encryptedText = arr.shift();

  while (arr[0] != "Decode") {
    let tokens = arr.shift().split("|");

    command = tokens[0];

    if (command === "Move") {
      Move(encryptedText, tokens[1]);
    } else if (command === "Insert") {
      Insert(encryptedText, tokens[1], tokens[2]);
    } else if (command === "ChangeAll") {
      ChangeAll(encryptedText, tokens[1], tokens[2]);
    }
}

    function Move(text, num) {
      let half = text.substring(0, num);
      let right = text.substring(num);
        newText = right + half;
      return newText;
    }
    function Insert(text, num, value) {
      let half = text.substring(0, num);
      let right = text.substring(num);
      newText = half + value + right;
      return newText;
    }
    function ChangeAll(text, str, replacement) {
      newText = text.split(str).join(replacement);
      return newText;
    }
  
  console.log(`The decrypted message is: ${encryptedText}`);

}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
