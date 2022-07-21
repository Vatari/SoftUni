function palindromeIntegers(arr) {
  function isPalindrome(number) {
    let startnum = number;
    let reversedNum = Number(number.toString().split("").reverse().join(""));
    if (startnum === reversedNum) {
      return true;
    } else {
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(isPalindrome(arr[i]));
  }
}
palindromeIntegers([123, 323, 421, 121]);
