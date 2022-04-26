function charactersInRange(ch1, ch2) {
  let result = [];
  function charRangeFunc(char1, char2) {
    let output = [];
    let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let end = Math.max(char1.charCodeAt(), char2.charCodeAt());

    for (let i = start + 1; i < end; i++) {
      output.push(String.fromCharCode(i));
    }
    return output;
  }

  console.log(charRangeFunc(ch1, ch2).join(" "));
}
charactersInRange("a", "d");
charactersInRange("#", ":");
