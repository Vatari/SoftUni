function replaceChars(text) {
  /* text = text.split("");
  let uniques = new Set(text);

  console.log(Array.from(uniques).join('')); */ //NOT WORKING FOR THIS EXAMPLE

    let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] != text[i + 1]) {
      result += text[i];
    }
  }
  console.log(result);
}

replaceChars("aaaaabbbbbcdddeeeedssaa");
