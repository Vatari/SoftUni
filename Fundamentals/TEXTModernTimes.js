function modernTimes(text) {
  let words = text.split(" ");
  let newArr = [];
  for (word of words) {
    if (word.includes("#")) {
      newArr.push(word);
    }
  }
  let filterChar = newArr.filter((x) => x.length > 1);

  for (let char of filterChar) {
    let isLetter = true;
    for (let i = 1; i < char.length; i++) {
      if (!isNaN(char[i])) {
        isLetter = false;
      }
    }
    if (isLetter) {
      console.log(char.substring(1));
    }
  }
}

modernTimes(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
