function solve(arr) {
  let rawPassword = arr.shift();

  let newPass = "";
  while (arr[0] != "Done") {
    let command = arr.shift().split(" ");

    if (command[0] === "TakeOdd") {
      for (i = 0; i < rawPassword.length; i++) {
        if (i % 2 != 0) {
          newPass += rawPassword[i];
        }
      }
      console.log(newPass);
    } else if (command[0] === "Cut") {
      let index = +command[1];
      let length = index + +command[2];
      let cutA = newPass.substring(0, index);
      let cutB = newPass.substring(length);
      newPass = cutA + cutB;
      console.log(newPass);
    } else if (command[0] === "Substitute") {
      let str = command[1];
      let replacer = command[2];
      if (newPass.includes(str)) {
        newPass = newPass.split(str).join(replacer);
        console.log(newPass);
      } else {
        console.log(`Nothing to replace!`);
        break;
      }
    }
  }
  console.log(`Your password is: ${newPass}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
solve([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
