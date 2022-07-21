function attachEventsListeners() {
  [...document.querySelectorAll('input[type="button"]')].forEach((x) =>
    x.addEventListener("click", convert)
  );

  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  function convert(ev) {
    if (ev.target.id == "daysBtn") {
      day();
    } else if (ev.target.id == "hoursBtn") {
      clickHours();
    } else if (ev.target.id == "minutesBtn") {
      clickMin();
    } else if (ev.target.id == "secondsBtn") {
      clickSeconds();
    }
  }

  function clickDay() {
    hours.value = Number(days.value) * 24;
    minutes.value = Number(hours.value) * 60;
    seconds.value = Number(minutes.value) * 60;
  }
  function clickHours() {
    days.value = Number(hours.value) / 24;
    minutes.value = Number(hours.value) * 60;
    seconds.value = Number(minutes.value) * 60;
  }
  function clickMin() {
    hours.value = Number(minutes.value) / 60;
    days.value = Number(hours.value) / 24;
    seconds.value = Number(minutes.value) * 60;
  }
  function clickSeconds() {
    minutes.value = Number(seconds.value) / 60;
    hours.value = Number(minutes.value) / 60;
    days.value = Number(hours.value) / 24;
  }
}
