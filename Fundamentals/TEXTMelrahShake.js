function melrahShake(arr) {
  let str = arr.shift();
  let searchString = arr.shift();

  while (searchString.length > 0) {
    let matchFirst = str.indexOf(searchString);
    let matchLast = str.lastIndexOf(searchString);

    if (matchFirst > -1 && matchLast > -1 && matchFirst !== matchLast) {
      str = str.split("");
      str.splice(matchFirst, searchString.length);
      str = str.join("");
      matchLast = str.lastIndexOf(searchString);
      str = str.split("");
      str.splice(matchLast, searchString.length);
      let removeFromPatt = searchString[Math.floor(searchString.length / 2)];
      searchString = searchString.replace(removeFromPatt, "");
      str = str.join("");

      console.log("Shaked it.");
    } else {
      break;
    }
  }
  console.log("No shake.");
  console.log(str);
}
melrahShake(["##mtm!!mm.mm*mtm.#", "mtm"]);
