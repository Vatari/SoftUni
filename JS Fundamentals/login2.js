function login(input) {
    let userName = input[0];
    let arrayLength = input.length;
    let count = 0;
 
    let reversedUserName = userName.split('').reverse();
    let reversed = '';
 
    for (let i = 0; i < reversedUserName.length; i++) {
        reversed += reversedUserName[i];
    }
 
    for (let i = 1; i < arrayLength; i++) {
        if (reversed === input[i]) {
            console.log(`User ${userName} logged in.`);
            break;
        }
 
        if(count >= 3) {
            console.log(`User ${userName} blocked!`);
            break;
        }
 
        if (reversed !== input[i]) {
            console.log(`Incorrect password. Try again.`);
        }
        count ++;
    }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
login(["Acer", "login", "go", "let me in", "recA"]);