"use strict";

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
  var key = arr.shift();

  while (arr[0] !== "Generate") {
    var line = arr.shift().split(">>>");
    var command = line.shift();

    if (command === "Contains") {
      var str = line[0];

      if (key.includes(str)) {
        console.log("".concat(key, " contains ").concat(str, "."));
      } else {
        console.log("Substring not found!");
      }
    } else if (command === "Slice") {
      var startIndex = +line[0];
      var endIndex = +line[1];
      var sliced = key.slice(startIndex, endIndex);
      key = key.split(sliced).join("");
      console.log(key);
    } else if (command === "Flip") {
      var casing = line[0];

      var _startIndex = +line[1];

      var _endIndex = +line[2];

      if (casing === "Upper") {
        var cutUpper = key.substring(_startIndex, _endIndex);
        key = key.split(cutUpper).join(cutUpper.toUpperCase());
        console.log(key);
      } else if (casing === "Lower") {
        var cutLower = key.substring(_startIndex, _endIndex);
        key = key.split(cutLower).join(cutLower.toLowerCase());
        console.log(key);
      }
    }
  }

  console.log("Your activation key is: ".concat(key));
}

solve(["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"]);