function password(input) {
  let index = 0;
  let username = input[index];
  index++;
  let pass = input[index];
  index++;

  let enterPass = input[index];
  index++;

  while (pass !== enterPass) {
    enterPass = input[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
