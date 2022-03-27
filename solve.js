function solve(arr) {
  let encryptedText = arr.shift();

  while (arr[0] != "Decode") {
    let tokens = arr.shift().split("|");
    command = tokens[0];

    if (command === "Move") {
      encryptedText = Move(encryptedText, tokens[1]);
    } else if (command === "Insert") {
      encryptedText = Insert(encryptedText, tokens[1], tokens[2]);
    } else if (command === "ChangeAll") {
      encryptedText = ChangeAll(encryptedText, tokens[1], tokens[2]);
    }
  }

  function Move(text, num) {
    let half = text.substring(0, num);
    let right = text.substring(num);
    text = right + half;
    return text;
  }
  function Insert(text, num, value) {
    let half = text.substring(0, num);
    let right = text.substring(num);
    text = half + value + right;
    return text;
  }
  function ChangeAll(text, str, replacement) {
    text = text.split(str).join(replacement);
    return text;
  }
  console.log(`The decrypted message is: ${encryptedText}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
