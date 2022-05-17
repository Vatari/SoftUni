function wordTracker(arr) {
  let words = {};
  let wantedWOrds = arr.shift().split(" ");

  wantedWOrds.forEach((word) => (words[word] = 0));

  arr.forEach((word) => {
    if (words.hasOwnProperty(word)) {
      words[word] += 1;
    }
  });

  let sorted = Object.entries(words);
  sorted.sort((a, b) => b[1] - a[1]);
  for (let [word, words] of sorted) {
    console.log(`${word} - ${words}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
