function passwordValidator(password) {
  function isLenghtEnough(stringPassword) {
    return stringPassword.length >= 6 && stringPassword.length <= 10;
  }

  function isOnlyLettersAndDigits(stringPassword) {
    // 'hello' => 'h' 'e' ...... etc
    for (let currCharIndex of stringPassword) {
      let currChar = currCharIndex.charCodeAt(0);
      if (
        !(currChar >= 48 && currChar <= 57) &&
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function isHavingAtleastTwoDigits(stringPassword) {
    let count = 0;
    for (let charIndex of stringPassword) {
      let currChar = charIndex.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }
  let isLenghtValid = isLenghtEnough(password);
  let isLettersAndDigitsOnly = isOnlyLettersAndDigits(password);
  let isContainingAtleastTwoDigits = isHavingAtleastTwoDigits(password);
  if (isLenghtValid && isLettersAndDigitsOnly && isContainingAtleastTwoDigits) {
    console.log("Password is valid");
  }
  if (!isLenghtValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLettersAndDigitsOnly) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isContainingAtleastTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
}

passwordValidator("Pa$s$s");
