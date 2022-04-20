function walking(input) {
  let target = 10000;
  let sum = 0;
  let index = 0;
  let command = input[index];

  while (command !== "Going home") {
    let steps = Number(command);
    sum += steps;

    if (sum >= target) {
      console.log("Goal reached! Good job!");
      let difference = sum - target;
      console.log(`${difference} steps over the goal!`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "Going home") {
    let stepsToHome = Number(input[index + 1]);
    sum += stepsToHome;

    if (sum >= target) {
      console.log("Goal reached! Good job!");
      let differece = sum - target;
      console.log(`${differece} steps over the goal!`);
    } else {
      let difference = target - sum;
      console.log(`${difference} more steps to reach goal.`);
    }
  }
}
walking(["1000", "1500", "2000", "6500"]);
