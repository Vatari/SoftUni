function skiVacation(input) {

    let days = Number(input[0] - 1);
    let type = input[1];
    let onePersonPrice = 18;
    let apartmentPrice = 25;
    let presidentPrice = 35;
    let eval = input[2];
    let totalPrice = 0;
   
   
    switch (type) {

        case "room for one person":
            totalPrice = days * onePersonPrice;
            break;
        case "apartment":
            if (days < 9) {
                totalPrice = (days * apartmentPrice) * 0.70;
            } else if (days < 14 && days >= 9) {
                totalPrice = (days * apartmentPrice) * 0.65;

            } else if (days >= 14) {
                totalPrice = (days * apartmentPrice) * 0.50;
            } break;
        case "president apartment":
            if (days < 9) {
                totalPrice = (days * presidentPrice) * 0.90;
            } else if
                (days < 14 && days >= 9) {
                totalPrice = (days * presidentPrice) * 0.85;
            }
            else if (days >= 14) {
                totalPrice = (days * presidentPrice) * 0.80;
            } break;



    }

    if (eval === "positive" && type === "room for one person") {
        console.log((totalPrice * 1.25).toFixed(2));
        if (eval === "negative" && type === "room for one person") {

            console.log((totalPrice * 0.90).toFixed(2));
        }
    } else if (eval === "positive" && type === "apartment") {
        console.log((totalPrice * 1.25).toFixed(2));
        if (eval === "positive" && type === "president apartment") {

            console.log((totalPrice * 1.25).toFixed(2));
        }

    } else if (eval === "negative" && type === "apartment") {
        console.log((totalPrice * 0.90).toFixed(2));
    } else if (eval === "negative" && type === "president apartment") {
        console.log((totalPrice * 0.90).toFixed(2));
    }


}
skiVacation(["-11",
    "room for one person",
    "positive"])

