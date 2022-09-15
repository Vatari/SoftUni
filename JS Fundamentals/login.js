function login(input) {
  let username = input[0];
  let password = "";
  let command = 0;
  let count = 0;

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  for (let j = 1; j <= input.length; j++) {
    command = input[j];

    if (command == password) {
      console.log(`User ${username} logged in.`);
      break;
    }

    if (command !== password) {
      console.log("Incorrect password. Try again.");
      count++;
    }

    if (count >= 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
  }
}

login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
login(["Test", "login", "go", "let me in", "recA"]);
