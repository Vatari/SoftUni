function calc_deposit(input) {

    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let percentage = Number(input[2]);

    let result = depositSum + period * ((depositSum * percentage / 100) / 12);
    console.log(result);

}
calc_deposit (["200","3","5.7"]);