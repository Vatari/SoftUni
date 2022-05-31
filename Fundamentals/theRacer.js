function Racer(arr) {
    let pattern = /^([#$%*&])(?<nameRacer>[A-Za-z]+)\1=(?<LengthCode>\d+)!!(?<Code>.+)$/;
    let racersObj = {};
  
    for ( let index = 0; index < arr.length; index ++ ) {
      let currentText = arr[index];
      // console.log(currentText);
      let match = pattern.exec(currentText);
  
      if (match !== null) {
        let racer = match.groups.nameRacer;
        let length = Number(match.groups.LengthCode);
        let encryptedCode = match.groups.Code;
        
        // console.log(racer,length,encryptedCode);
        if (length == encryptedCode.length) {
          let arrOfEncryptCode = encryptedCode.split("");
          // console.log(arrOfEncryptCode);
          let newStr = arrOfEncryptCode.map((x) => x.charCodeAt() + length).map((x) => (x = String.fromCharCode(x))).join("");
          // let newStr = tempArr.map(x => x = String.fromCharCode(x)).join("");
          // console.log(newStr);
          racersObj[racer] = newStr;
          console.log(`Coordinates found! ${racer} -> ${racersObj[racer]}`);
        }
      }  else {
          console.log(`Nothing found!`);
      }
  
    }
  }
  
  Racer([
    "%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S",
  ]);
  
  console.log(`---------`);
  
  Racer([
    "Ian6Hutchinson=7!!(58ycb4",
    "#MikeHailwood#!!'gfzxgu6768=11",
    "slop%16!!plkdek/.8x11ddkc",
    "$Steve$=9Hhffjh",
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    "RichardQ^uayle=16!!fr5de5kd",
  ]);
  