var isPalindrome = function (x) {
  let result = [];
  temp = x.toString().split("");
  if (x < 0) {
    return false;
  }

  for (let i = 0; (i = temp.length); i++) {
    result.push(temp.pop());
  }
  result = result.join("");
  if (result == x) {
    return true;
  } else {
    return false;
  }
};

isPalindrome(-121);
