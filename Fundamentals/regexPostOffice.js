function postOffice(arr) {
  arr = arr.join("");
  let [firstPart, secondPart, thirdPart] = arr.split("|");
  let patternFirstPart =
    /(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g;
  let patternSecondPart = /([7-8][0-9]|90|65|66|67|68|69):([0-1][1-9]|20|10)/g;
  let toUpper = patternFirstPart.exec(firstPart);
  toUpper = toUpper[1].split("");
  toUpper.shift();
  toUpper.pop();
  let lengths = secondPart.match(patternSecondPart);
  let obj = new Map();
  for (let char of toUpper) {
    obj.set(char, 0);
  }
  let unique = [];
  for (let el of lengths) {
    let [charCode, length] = el.split(":");
    charCode = String.fromCharCode(charCode);
    if (!unique.includes(charCode)) {
      unique.push(charCode);
    } else {
      continue;
    }
    length = +length + 1;
    if (obj.has(charCode)) {
      obj.set(charCode, length);
    }
  }
  thirdPart = thirdPart.split(" ");
  for (let char of toUpper) {
    for (let word of thirdPart) {
      if (char === word[0] && word.length === obj.get(char)) {
        console.log(word);
      }
    }
  }
}
postOffice([
  'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig',
]);
