function winingTicket(text) {
  let result = text.split(", ");
  let pattern =
    /(?=.{20}).*?(?=(?<cash>[@#$^]))(?<win>\k<cash>{6,}).*(?<=.{10})\k<win>.*/;

  result[0].split(/\s*,\s*/);
  for (let line of result) {
    let match = pattern.exec(line.trim());

    if (match) {
      if (match.groups.win.length >= 6 && match.groups.win.length <= 9) {
        console.log(
          `ticket "${line.trim()}" - ${match.groups.win.length}${match.groups.cash}`
        );
      } else if (match.groups.win.length == 10) {
        console.log(
          `ticket "${line.trim()}" - ${match.groups.win.length}${match.groups.cash} Jackpot!`
        );
      }
    } else if (line.trim().length !== 20) {
      console.log("invalid ticket");
    } else {
      console.log(`ticket "${line.trim()}" - no match`);
    }
  }
}
winingTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
