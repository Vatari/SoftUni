function stringSubstring(word, text) {
  isMatch = false;
  text = text.toLowerCase().split(" ");
  for (let el of text) {
    if (el === word) {
      isMatch = true;

      console.log(el);
    }
  }

  if (!isMatch) {
    console.log(`${word} not found!`);
  }
}

stringSubstring("javascript", "JavaScript is the best programming language");
