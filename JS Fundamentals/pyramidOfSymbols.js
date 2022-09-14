// Display pyramid of number using JavaScript
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
       let str = ' '.repeat(n - i);
       let str2 = '*'.repeat(i * 2 - 1);
       console.log(str + str2 + str);
    }
 }
 
 pyramid(50);
 pyramid(150);
