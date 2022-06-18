function wordsUppercase(string) {
    let pattern = /[\W]+/g;
  
    string = string.replace(pattern, " ").trim();
  
    console.log(string.split(" ").join(", ").toUpperCase());
  }
  wordsUppercase("Hi, how are you?");
  