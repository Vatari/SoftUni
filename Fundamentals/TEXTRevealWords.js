function revealWords(word, text) {
  let index;
  word = word.split(", ");
  text = text.split(" ");
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (text[i].includes("*") && text[i].length == word[j].length) {
        index = text.indexOf(text[i]);
        text.splice(index, 1, word[j]);
      }
    }
  }

  console.log(text.join(" "));
}

//ANOTHER SHORT SOLUTION !!
/* function solve(words, text) {
  words = words.split(", ");

  words.forEach((word) => (text = text.replace("*".repeat(word.length), word)));

  /*   for (word of words) {
    text = text.replace("*".repeat(word.length), word);
  } 
  console.log(text); 
} */

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
