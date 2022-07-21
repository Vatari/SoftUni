function bossRush(arr) {
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;
  
    let n = +arr.shift();
    for (let i = 0; i < n; i++) {
      let name = pattern.exec(arr[i]);
      if (name !== null) {
        console.log(`${name.groups.name}, The ${name.groups.title}`);
        console.log(`>> Strength: ${name.groups.name.length}`);
        console.log(`>> Armor: ${name.groups.title.length}`);
      }
      else{
          console.log("Access denied!");
      }
    }
  }
  bossRush([
    "3",
    "|PETER|:#Lead architect#",
    "|GEORGE|:#High Overseer#",
    "|ALEX|:#Assistant Game Developer#",
  ]);
  console.log(`---`);
  bossRush([
    "3",
    "|STEFAN|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#",
  ]);
  