function countStringOccurrences(text, word) {
  let count = 0;
  text = text.split(" ");
  /*  for (let i = 0; i < text.length; i++) {
    if (text[i] === word) count++;
  } */

  for (el of text) {
    if (el === word) {
      count++;
    }
  }
  console.log(count);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
