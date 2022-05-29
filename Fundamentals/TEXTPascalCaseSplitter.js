function pascalCaseSplitter(text) {
  let newArr = [];
  newArr.push(splitPascalCase(text));

  newArr.forEach((el) => console.log(el.split(" ").join(", ")));

  /*     for (el of newArr) {
    console.log(el.split(' ').join(', '));
  } */
  function splitPascalCase(text) {
    return text.replace(/([A-Z])/g, " $1").replace(/^./, function (x) {
      return x.toUpperCase().trim();
    });
  }
}

/*  function pascalCase(str) {
    return (
      str
        // Look for long acronyms and filter out the last letter
        .replace(/([A-Z]+)([A-Z][a-z])/g, " $1 $2")
        // Look for lower-case letters followed by upper-case letters
        .replace(/([a-z\d])([A-Z])/g, "$1 $2")
        // Look for lower-case letters followed by numbers
        .replace(/([a-zA-Z])(\d)/g, "$1 $2")

        .replace(/^./, function (str) {
          return str.toUpperCase();
        })
        // Remove any white space left around the word
        .trim()
    );
  }
} */
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
