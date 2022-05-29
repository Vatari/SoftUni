function nikuldenCharity(arr) {
  let word = arr.shift();
  for (let el of arr) {
    if (el === "Finish") {
      break;
    }
    let [command, el1, el2] = el.split(" ");
    switch (command) {
      case "Replace":
        while (word.includes(el1)) {
          word = word.replace(el1, el2);
        }
        console.log(word);
        break;
      case "Cut":
        let start = +el1;
        let end = +el2;
        if (start >= 0 && start <= end && end < word.length) {
          let cutA = word.substring(0, start);
          let cutB = word.substring(end + 1);
          word = cutA + cutB;
          console.log(cutA + cutB);
        } else {
          console.log(`Invalid indexes!`);
        }
        break;
      case "Make":
        if (el1 === "Upper") {
          word = word.toUpperCase();
        } else if (el1 === "Lower") {
          word = word.toLowerCase();
        }
        console.log(word);
        break;
      case "Check":
        if (word.includes(el1)) {
          console.log(`Message contains ${el1}`);
        } else {
          console.log(`Message doesn't contain ${el1}`);
        }
        break;
      case "Sum":
        let startInd = +el1;
        let endInd = +el2;
        if (startInd >= 0 && startInd <= endInd && endInd < word.length) {
          let cuttedWord = word.substring(startInd, endInd + 1);
          let sum = 0;
          cuttedWord.split("").forEach((el) => {
            sum += el.charCodeAt(0);
          });
          console.log(sum);
        } else {
          console.log(`Invalid indexes!`);
        }
        break;
    }
  }
}
nikuldenCharity([
  "ILikeSharan",
  "Replace a e",
  "Make Upper",
  "Check SHEREN",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]);
