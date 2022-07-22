function solve() {
  const html = {
    stopInfo: document.querySelector(`#info > span`),
    departBtn: document.querySelector(`#depart`),
    arriveBtn: document.querySelector(`#arrive`),
  };

  const getStop = async (stopName) => {
    try {
      const busStop = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${stopName}`
      );

      return await busStop.json();
    } catch (error) {
      html.stopInfo.textContent = "Error";
      html.arriveBtn.disabled = true;
      html.departBtn.disabled = true;
    }
  };
  let nextStop;
  let nextStopName = "depot";

  async function depart() {
    html.departBtn.disabled = true;
    html.arriveBtn.disabled = false;
    nextStop = await getStop(nextStopName);
    html.stopInfo.textContent = `Next stop ${nextStop.name}`;
  }

  function arrive() {
    html.departBtn.disabled = false;
    html.arriveBtn.disabled = true;

    html.stopInfo.textContent = `Arriving at ${nextStop.name}`;
    nextStopName = nextStop.next;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
