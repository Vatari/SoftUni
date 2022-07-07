function attachEventsListeners() {
  let input = document.querySelector("#inputDistance");
  let output = document.querySelector("#outputDistance");
  let inputUnit = document.querySelector("#inputUnits");
  let outputUnit = document.querySelector("#outputUnits");
  let convertBtn = document.querySelector("#convert");

  let values = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };
  convertBtn.addEventListener("click", convert);

  function convert() {
    let convertFrom = inputUnit.value;
    let convertTo = outputUnit.value;

    let valueInMeters = input.value * values[convertFrom];
    let convertedValue = valueInMeters / values[convertTo];
    output.value = convertedValue;
  }
}
