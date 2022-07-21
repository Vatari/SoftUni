function materials(input) {

        let penPacks = Number(input[0]);
        let markerPacks = Number(input[1]);
        let cleanerInLiters = Number(input[2]);
        let discount = Number(input[3]) / 100;

        let penSum = penPacks * 5.80;
        let markerSum = markerPacks * 7.20;
        let cleanerSum = cleanerInLiters * 1.20;

        let totalSum = penSum + markerSum + cleanerSum;
        let sumDiscount = totalSum * discount;
        let finalResult = totalSum - sumDiscount;

        console.log(finalResult);

}
materials(["2", "3", "4", "25"]);