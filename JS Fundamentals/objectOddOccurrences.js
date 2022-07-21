function oddOccurrences(arr) {
  let result = {};
  let words = arr.split(" ");
  let last = [];

  for (let el of words) {
    el = el.toLocaleLowerCase();
    if (result[el] === undefined) {
      result[el] = 1;
    } else {
      result[el]++;
    }
  }

  let sorted = Object.entries(result);
  sorted.sort((a, b) => b[0].localeCompare(a[0]) && b[1] - a[1]);
  for (let [word, count] of sorted) {
    if (count % 2 != 0) {
      last.push(word);
    }
  }
  console.log(last.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
