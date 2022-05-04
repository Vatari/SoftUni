function firstAndLastKNumbers(arr) {
  function kNums(arr) {
    let k = arr.shift();

    let startK = arr.slice(0, k);
    let endK = arr.slice(-k);

    return `${startK.join(" ")}\n${endK.join(" ")}`;
  }
  console.log(kNums(arr));
}
firstAndLastKNumbers([2, 7, 8, 9]);
