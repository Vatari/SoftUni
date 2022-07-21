function hardWords(arr) {
  let [text, words] = arr.slice();
  text = text.split(" ");
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];

    for (let word of words) {
      if (
        letter.endsWith("!") ||
        letter.endsWith("?") ||
        letter.endsWith(",") ||
        letter.endsWith(".")
      ) {
        if (letter.slice(0, -1) === "_".repeat(word.length)) {
          letter = letter.replace("_".repeat(word.length), word);
        }
      } else if (letter === "_".repeat(word.length)) {
        letter = word;
      }
    }
    text[i] = letter;
  }

  console.log(text.join(" "));
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
