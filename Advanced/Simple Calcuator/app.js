function calculator() {
  let htmlElements = { num1: "", num2: "", result: "" };

  function calculate(a, b, operator) {
    let operators = { "+": (a, b) => a + b, "-": (a, b) => a - b };

    return operators[operator](Number(a), Number(b));
  }

  return {
    init: (a, b, c) => {
      htmlElements.num1 = document.querySelector(a);
      htmlElements.num2 = document.querySelector(b);
      htmlElements.result = document.querySelector(c);
    },
    add: () =>
      (htmlElements.result.value = calculate(
        htmlElements.num1.value,
        htmlElements.num2.value,
        "+"
      )),
    subtract: () =>
      (htmlElements.result.value = calculate(
        htmlElements.num1.value,
        htmlElements.num2.value,
        "-"
      )),
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
