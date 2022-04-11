function literatura (input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeNeeded = pages / pagesPerHour;
    let hoursPerDay = timeNeeded / days;
    console.log(hoursPerDay);
}
literatura (["212","20","2"]);
