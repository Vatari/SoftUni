function solve() {
  let inputStr = document.getElementById("text").value.toLowerCase().split(" ");

  let casing = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (casing === "Camel Case") {
    result.textContent = camelCase(inputStr);
  } else if (casing === "Pascal Case") {
    result.textContent = pascalCase(inputStr);
  } else {
    result.textContent = "Error!";
  }

  function camelCase(str) {
    let result = "";
    let char = str[0];
    for (let i = 1; i < str.length; i += 1) {
      result += str[i][0].toUpperCase() + str[i].slice(1);
    }
    return char + result;
  }
  function pascalCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i += 1) {
      result += str[i][0].toUpperCase() + str[i].slice(1);
    }
    return result;
  }
}
