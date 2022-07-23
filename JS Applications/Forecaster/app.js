function attachEvents() {
  const inputField = document.querySelector("#location");

  document
    .querySelector("#submit")
    .addEventListener("click", () => displayInfo(inputField.value));
}

const weatherInfo = async (url) => {
  const response = await fetch(
    `http://localhost:3030/jsonstore/forecaster/${url}`
  );
  if (!response.ok) throw new Error();
  const data = response.json();
  if (!data) throw new Error();

  return data;
};

const getCode = (arr, n) => {
  const location = arr.find((x) => x.name === n);

  if (location === undefined) throw new Error();

  return location.code;
};
const specialSymbols = {
  Sunny: "&#x2600;",
  "Partly sunny": "&#x26C5;",
  Overcast: "&#x2601;",
  Rain: "&#x2614;",
  Degrees: "&#176;",
};

function tomorrowTemplate({ forecast, name }) {
  const divElement = document.createElement("div");
  divElement.className = "forecasts";

  divElement.innerHTML = `<span class="condition symbol">${
    specialSymbols[forecast.condition]
  }</span><span class="condition"><span class="forecast-data">${name}</span><span class="forecast-data">${
    forecast.low
  }&#176;/${forecast.high}&#176;</span><span class="forecast-data">${
    forecast.condition
  }</span></span>`;

  return divElement;
}

function dayTemplate({ condition, high, low }) {
  const spanElement = document.createElement("span");

  spanElement.className = "upcoming";

  spanElement.innerHTML = `<span class="symbol">${specialSymbols[condition]}</span><span class="forecast-data">${low}&#176;/${high}&#176;</span><span class="forecast-data">${condition}</span>`;
  return spanElement;
}

const displayForecast = (display) =>
  (document.getElementById("forecast").style.display = display);

const clear = () => {
  document.querySelector(
    "#current"
  ).innerHTML = `<div class="label">Current conditions</div>`;
  document.querySelector(
    "#upcoming"
  ).innerHTML = `<div class="label">Three-day forecast</div>`;
};

async function displayInfo(name) {
  const html = {
    currentOutput: document.querySelector(`#current`),
    threeDaysOutput: document.querySelector(`#upcoming`),
    mainForecast: document.querySelector("#forecast"),
  };

  displayForecast("block");
  clear();

  try {
    const divElement = document.createElement("div");
    divElement.classList.add("forecast-info");
    const initialData = await weatherInfo("locations");
    const code = getCode(initialData, name);
    const tomorrowData = await weatherInfo(`today/${code}`);
    const threeDaysData = await weatherInfo(`upcoming/${code}`);

    html.currentOutput.appendChild(tomorrowTemplate(tomorrowData));

    Object.values(threeDaysData.forecast).forEach((x) =>
      divElement.appendChild(dayTemplate(x))
    );
    html.threeDaysOutput.appendChild(divElement);
  } catch (e) {
    html.currentOutput.appendChild(document.createTextNode("Error"));
  }
}

attachEvents();
