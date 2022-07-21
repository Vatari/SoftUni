function ShootForTheWin(arr) {
  let targets = arr.shift().split(" ").map(Number);

  while (arr[0] != "End") {
    let command = +arr.shift();

    if (typeof targets[command] != "undefined" && targets[command] != -1) {
      targets[command] = -1;
    }
    let currentTarget = targets[0];

    if (currentTarget > targets[command] && currentTarget != -1) {
      targets[command] -= currentTarget;
    } else if (currentTarget <= targets[command] && currentTarget != -1){
      currentTarget +=  targets[command]
    }

  }

  console.log(targets);
}
ShootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
