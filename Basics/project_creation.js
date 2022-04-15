function project (input) {

    let name = input[0];
    let hours = Number(input[1]) * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${Number(input[1])} project/s.`);

}
project (["George", "4"]);