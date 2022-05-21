function santaSecretHelper(arr) {
  let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<type>G|N)!/g;
  let key = +arr.shift();
  let text = arr.slice(0, arr.indexOf("end")).reduce(
    (acc, curr) =>
      (acc += curr
        .split("")
        .map((c) => String.fromCharCode(c.charCodeAt() - key))
        .join("")),
    ""
  );

  Array.from(text.matchAll(pattern)).forEach((match) => {
    const { name, type } = match.groups;
    if (type === "G") {
      console.log(name);
    }
  });
}
santaSecretHelper([
  "3",
  "CNdwhamigyenumje$J$",
  "CEreelh-nmguuejnW$J$",
  "CVwdq&gnmjkvng$Q$",
  "end",
]);
