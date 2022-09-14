function centuriesToMinutes(century) {
  let years = century * 100;
  let yearDays = Math.trunc(years * 365.2422);
  let hours = Math.trunc(yearDays * 24);
  let minutes = Math.trunc(hours * 60);

  console.log(
    `${century} centuries = ${years} years = ${yearDays} days = ${hours} hours = ${minutes} minutes`
  );
}
centuriesToMinutes(1);
centuriesToMinutes(5);
centuriesToMinutes(15);

