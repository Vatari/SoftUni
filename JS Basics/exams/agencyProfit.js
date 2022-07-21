function agencyProfit(input) {
  let airCompany = input[0];
  let adultTicketsCount = Number(input[1]);
  let childrenTicketCount = Number(input[2]);
  let nettoAdultTicketPrice = Number(input[3]);
  let serviceTax = Number(input[4]);

  let nettochildrenTicketPrice = 0;

  nettochildrenTicketPrice = nettoAdultTicketPrice * 0.3;
  let totalAdultTicketPrice = nettoAdultTicketPrice + serviceTax;
  let totalChildrenTicketPrice = nettochildrenTicketPrice + serviceTax;
  let totalSumOfAllTickets =
    childrenTicketCount * totalChildrenTicketPrice +
    adultTicketsCount * totalAdultTicketPrice;
  let totalGain = totalSumOfAllTickets * 1.2;

  console.log(
    `The profit of your agency from ${airCompany} tickets is ${(
      totalGain - totalSumOfAllTickets
    ).toFixed(2)} lv.`
  );
}
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);
