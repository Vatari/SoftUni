function fruitOrVegetable (input) {

    let type = input [0];

    switch(type) {

        case "kiwi" :
        case "cherry" :
        case "grapes" :
        case "lemon" :
        case "apple" :
        case "banana" : console.log ("fruit"); break;
        case "tomato" :
        case "cucumber" :
        case "pepper" :
        case "carrot" : console.log ("vegetable"); break;
        default : console.log ("unknown"); break;
    }

}
fruitOrVegetable(["kiwi"]);