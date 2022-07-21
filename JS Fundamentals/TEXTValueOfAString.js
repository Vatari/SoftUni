function valueOfString(arr) {
  let sum = 0;
  let str = arr
    .shift()
    .split("")
    .filter(
      (x) =>
        (x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90) ||
        (x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122)
    );
  let casing = arr.shift().split("").join("");

  if (casing === "LOWERCASE") {
    str = str.filter((v) => v.charCodeAt(v) >= 97 && v.charCodeAt(v) <= 122);
    for (let el of str) {
      el = el.charCodeAt();
      sum += el;
    }
  }

  if (casing === "UPPERCASE") {
    str = str.filter((v) => v.charCodeAt(v) >= 65 && v.charCodeAt(v) <= 90);
    for (let el of str) {
      el = el.charCodeAt();
      sum += el;
    }
  }
  return `The total sum is: ${sum}`;
}
//valueOf('HelloFromMyAwesomePROGRAM', 'LOWERCASE');
console.log(valueOfString(["AC/DC", "UPPERCASE", ""]));
