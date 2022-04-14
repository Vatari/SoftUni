function passwordGuess (input) {

    let passwordInput = input[0];
    let passwordCheck = "s3cr3t!P@ssw0rd";

    if (passwordInput === passwordCheck) {
        console.log(`Welcome`);
    } else 
    console.log (`Wrong password!`);

}
passwordGuess(["qwerty"]);