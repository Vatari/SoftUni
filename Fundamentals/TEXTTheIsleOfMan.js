function isleOfMan(arr) {
  let decryptedText = "";
  let code = /(#|\$|%|\*|&)(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>.+)/;
  for (let i = 0; i < arr.length; i++) {
    let result = code.exec(arr[i]);
    if (result) {
      let length = Number(result.groups.length);
      if (result.groups.code.length === length) {
        for (let i = 0; i < result.groups.code.length; i++) {
          decryptedText += String.fromCharCode(
            result.groups.code.charCodeAt(i) + length
          );
        }
        console.log(
          `Coordinates found! ${result.groups.name} -> ${decryptedText}`
        );
        break;
      } else {
        console.log("Nothing found!");
      }
    } else {
      console.log("Nothing found!");
    }
  }
}
isleOfMan([
  "Ian6Hutchinson=7!!\\(58ycb4",
  "#MikeHailwood#!!'gfzxgu6768=11",
  "slop%16!!plkdek/.8x11ddkc",
  "$Steve$=9Hhffjh",
  "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
  "RichardQ^uayle=16!!fr5de5kd",
]);
