function mirrorWords(arr) {
  let pairsPattern = /(@|#)(?<w1>[A-Za-z]{3,})\1\1(?<w2>[A-Za-z]{3,})\1/g;
  let pairs = [...arr[0].matchAll(pairsPattern)];
  let palindroms = [];
  let result = [];

  for (let pair of pairs) {
    let word1 = pair[2];
    let word2 = pair[3];
    let reverseWord2 = word2.split("").reverse().join("");
    if (word1 == reverseWord2) {
      palindroms.push(word1);
      result.push(`${word1} <=> ${word2}`);
    }
  }
  if (pairs.length > 0) {
    console.log(`${pairs.length} word pairs found!`);
  } else {
    console.log(`No word pairs found!`);
  }
  if (palindroms.length > 0) {
    console.log(`The mirror words are:\n${result.join(", ")}`);
  } else {
    console.log(`No mirror words!`);
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log(`=======`);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
