function monthPrinter(num) {
  if (num < 1 || num > 12) {
    console.log("Error!");
  }
  switch (num) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
  }
}
monthPrinter(13);
monthPrinter(1);
monthPrinter(2);
monthPrinter(3);
monthPrinter(4);
monthPrinter(5);
monthPrinter(6);
monthPrinter(7);
monthPrinter(8);
monthPrinter(9);
monthPrinter(10);
monthPrinter(11);
monthPrinter(12);
monthPrinter(43);
