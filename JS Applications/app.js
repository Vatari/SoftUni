function getInfo() {
  const htmlElements = {
    stopName: document.querySelector("#stopName"),
    busses: document.querySelector("#buses"),
    stopID: document.querySelector("#stopId"),
  };
  htmlElements.stopName.innerHTML = "";
  htmlElements.busses.innerHTML = "";

  const info = fetch(
    `http://localhost:3030/jsonstore/bus/businfo/${htmlElements.stopID.value}`
  )
    .then((info) => {
      if (info.ok) {
        return info.json();
      }
    })
    .then((info) => {
      htmlElements.stopName.textContent = info.name;
      Object.entries(info.buses).forEach(([bus, time]) => {
        const li = document.createElement("li");
        li.textContent = `Bus ${bus} arrives in ${time}`;

        htmlElements.busses.appendChild(li);
      });
    })
    .catch((error) => {
      htmlElements.stopName.textContent = "Error";
    });
}
