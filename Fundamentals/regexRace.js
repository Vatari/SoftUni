function race(arr) {
  names = arr.shift().split(", ");
  let racers = {};
  let namePAttern = /[A-Za-z]/g;
  let digitPattern = /\d/gm;
  for (name of names) {
    racers[name] = 0;
  }

  for (line of arr) {
    if (line != "end of race") {
      let racerName = line.match(namePAttern).join("");
      let distance = line.match(digitPattern);
      //let tempDistance = 0;

      tempDistance = distance.map(Number).reduce((a, b) => a + b);   //REDUCE SOLUTION

      /*  for (digit of distance) {
        tempDistance += +digit;
      } */

      if (names.includes(racerName)) {
        if (racers.hasOwnProperty(racerName)) {
          racers[racerName] += tempDistance;
        } else {
          racers[racerName] = tempDistance;
        }
      }
    }
  }

  let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

  console.log(
    `1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`
  );
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
