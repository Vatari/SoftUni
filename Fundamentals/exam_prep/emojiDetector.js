function solve(text) {
  /*     There will always be at least one digit in the text!
    You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.  
    The cool threshold could be a huge number, so be mindful.
    An emoji is valid when:
    •	It is surrounded by 2 characters, either "::" or "**"
    •	It is at least 3 characters long (without the surrounding symbols)
    •	It starts with a capital letter
    •	Continues with lowercase letters only
    Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
    Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
    You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing all 
    the ASCII values of all letters in the emoji. 
    Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
    You need to print the result of the cool threshold and, after that to take all emojis out of the text, count them and print only 
    the cool ones on the console.
    Input
    •	On the single input, you will receive a piece of string. 
    Output
    •	On the first line of the output, print the obtained Cool threshold in the format:
    "Cool threshold: {coolThresholdSum}"
    •	On the following line, print the count of all emojis found in the text in format:
    "{countOfAllEmojis} emojis found in the text. The cool ones are:
    {cool emoji 1}
    {cool emoji 2}
    …
    {cool emoji N}"
    Constraints
    Your task is to write a program that extracts emojis from a text and find the threshold based on the input. */

  let emojiPattern = /([:]{2})[A-Z][a-z]{2,}\1|([*]{2})[A-Z][a-z]{2,}\2/gm;
  let thresholdPattern = /\d+/g;
  let emojis = {};
  let match = emojiPattern.exec(text);
  let matchThreshold = thresholdPattern.exec(text);
  let temp = [];
  let threshold = 1;
  let isCool = true;
  while (matchThreshold != null) {
    temp.push(+matchThreshold[0]);
    matchThreshold = thresholdPattern.exec(text);
  }
  temp = temp.join("").split("").map(Number);
  for (el of temp) {
    threshold *= el;
  }

  while (match != null) {
    emojis[match[0]] = 0;
    match = emojiPattern.exec(text);
  }

  for (emoji in emojis) {
    for (char of emoji) {
      if (
        (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
        (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
      ) {
        let temp = char.charCodeAt();
        emojis[emoji] += temp;
      }
    }
  }
  let result = Object.entries(emojis);
  console.log(`Cool threshold: ${threshold}`);
  console.log(
    `${Object.keys(emojis).length} emojis found in the text. The cool ones are:`
  );

  for (let [emoji, coolness] of result) {
    if (coolness < threshold) {
      isCool = false;
    }
    if (isCool) {
      console.log(`${emoji}`);
    }
  }
}
solve(
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
);
