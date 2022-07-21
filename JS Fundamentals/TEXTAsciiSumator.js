function ASCIISumator(arr) {
  let start = 0;
  let end = 0;
  let firstLetter = arr[0].charCodeAt();
  let secondLetter = arr[1].charCodeAt();
  if (firstLetter < secondLetter) {
    start = firstLetter;
    end = secondLetter;
  } else {
    start = secondLetter;
    end = firstLetter;
  }
  let text = arr[2];
  let sum = 0;

  for (let symbol of text) {
    let asciiCode = symbol.charCodeAt();
    if (asciiCode > start && asciiCode < end) {
      sum += asciiCode;
    }
  }
  console.log(sum);
}

ASCIISumator([".", "@", "dsg12gr5653feee5"]);
ASCIISumator(["?", "E", "@ABCEF"]);
ASCIISumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
