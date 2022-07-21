function solve(arr) {
  /*     There are several types of instructions, split by ">>>":
    You are about to make some good money, but first, you need to think of a way to verify who paid for your product and who didn't.
    You have decided to let people use the software for a free trial period and then require an activation key to continue using the product. 
    Before you can cash out, the last step is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!
    After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need 
    to be performed upon the raw activation key.
    •	"Contains>>>{substring}":
    o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
    o	Otherwise, prints: "Substring not found!"
    •	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
    o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
    o	All given indexes will be valid.
    •	"Slice>>>{startIndex}>>>{endIndex}":
    o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
    o	Both indices will be valid.
    Input
    •	The first line of the input will be a string consisting of letters and numbers only. 
    •	After the first line, until the "Generate" command is given, you will be receiving strings.
    Output
    •	After the "Generate" command is received, print:
    o	"Your activation key is: {activation key}"
    The first line of the input will be your raw activation key. It will consist of letters and numbers only.  */

  let key = arr.shift();
  while (arr[0] !== "Generate") {
    let line = arr.shift().split(">>>");
    let command = line.shift();
    if (command === "Contains") {
      let str = line[0];
      if (key.includes(str)) {
        console.log(`${key} contains ${str}.`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command === "Slice") {
      let startIndex = +line[0];
      let endIndex = +line[1];
      let sliced = key.slice(startIndex, endIndex);
      key = key.split(sliced).join("");
      console.log(key);
    } else if (command === "Flip") {
      let casing = line[0];
      let startIndex = +line[1];
      let endIndex = +line[2];
      if (casing === "Upper") {
        let cutUpper = key.substring(startIndex, endIndex);
        key = key.split(cutUpper).join(cutUpper.toUpperCase());
        console.log(key);
      } else if (casing === "Lower") {
        let cutLower = key.substring(startIndex, endIndex);
        key = key.split(cutLower).join(cutLower.toLowerCase());
        console.log(key);
      }
    }
  }
  console.log(`Your activation key is: ${key}`);
}
solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
