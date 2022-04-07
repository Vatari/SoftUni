function foodDelivery (input) {

    let chickenMenu = Number(input[0] * 10.35);
    let fishMenu = Number(input[1] * 12.40);
    let veganMenu = Number(input[2] * 8.15);
    

    let allMenuSum = chickenMenu + fishMenu + veganMenu;
    let dessert = allMenuSum * 0.20;
    let transport = 2.50;
    let totalSum = allMenuSum + dessert + transport;
    console.log(totalSum);
}
foodDelivery(["2", "4", "3"]);