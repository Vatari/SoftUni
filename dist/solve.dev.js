"use strict";

function solve(arr) {
  var rawPassword = arr.shift();
  var newPass = "";

  while (arr[0] != "Done") {
    var command = arr.shift().split(" ");

    if (command[0] === "TakeOdd") {
      for (i = 0; i < rawPassword.length; i++) {
        if (i % 2 != 0) {
          newPass += rawPassword[i];
        }
      }

      console.log(newPass);
    } else if (command[0] === "Cut") {
      var index = +command[1];
      var length = index + +command[2];
      var cutA = newPass.substring(0, index);
      var cutB = newPass.substring(length);
      newPass = cutA + cutB;
      console.log(newPass);
    } else if (command[0] === "Substitute") {
      var str = command[1];
      var replacer = command[2];

      if (newPass.includes(str)) {
        newPass = newPass.split(str).join(replacer);
        console.log(newPass);
      } else {
        console.log("Nothing to replace!");
        break;
      }
    }
  }

  console.log("Your password is: ".concat(newPass));
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", "TakeOdd", "Cut 15 3", "Substitute :: -", "Substitute | ^", "Done"]);
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy", "TakeOdd", "Cut 18 2", "Substitute ! ***", "Substitute ? .!.", "Done"]);