function passwordGenerator(arr) {
  let [firstWord, secondWord, thirdWord] = arr;
  let combinedWord = firstWord.concat(secondWord);
  let letters = ["a", "e", "i", "o", "u"];
  let reversedPassword = "";
  thirdWord = thirdWord.toLowerCase();
  let letterIndex = 0;
  for (let i = 0; i < combinedWord.length; i++) {
    if (letters.includes(combinedWord[i])) {
      let indexOfLetter = letterIndex % thirdWord.length;
      letterIndex++;
      let currentChar = thirdWord.charAt(indexOfLetter);
      reversedPassword += currentChar.toUpperCase();
    } else {
      reversedPassword += combinedWord[i];
    }
  }
  console.log(
    `Your generated password is ${reversedPassword
      .split("")
      .reverse()
      .join("")}`
  );
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
