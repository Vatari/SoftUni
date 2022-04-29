function digitsWithWords(word) {
  switch (word) {
    case "zero":
      word = 0;
      break;
    case "one":
      word = 1;
      break;
    case "two":
      word = 2;
      break;
    case "three":
      word = 3;
      break;
    case "four":
      word = 4;
      break;
    case "five":
      word = 5;
      break;
    case "six":
      word = 6;
      break;
    case "seven":
      word = 7;
      break;
    case "eight":
      word = 8;
      break;
    case "nine":
      word = 9;
      break;
    case "ten":
      word = 10;
      break;
  }

  console.log(word);
}
digitsWithWords("one");
digitsWithWords("four");
digitsWithWords("ten");
