function tradeComission(input) {
  let city = input[0];
  let volumeSales = Number(input[1]);
  let comission = 0;

  switch (city) {
    case "Sofia":
      if (volumeSales <= 500) {
        comission = (volumeSales * 5) / 100;
      } else if (volumeSales <= 1000) {
        comission = (volumeSales * 7) / 100;
      } else if (volumeSales <= 10000) {
        comission = (volumeSales * 8) / 100;
      } else if (volumeSales > 10000) {
        comission = (volumeSales * 12) / 100;
      }
      break;
    case "Varna":
      if (volumeSales <= 500) {
        comission = (volumeSales * 4.5) / 100;
      } else if (volumeSales <= 1000) {
        comission = (volumeSales * 7.5) / 100;
      } else if (volumeSales <= 10000) {
        comission = (volumeSales * 10) / 100;
      } else if (volumeSales > 10000) {
        comission = (volumeSales * 13) / 100;
      }
      break;
    case "Plovdiv":
      if (volumeSales <= 500) {
        comission = (volumeSales * 5.5) / 100;
      } else if (volumeSales <= 1000) {
        comission = (volumeSales * 8) / 100;
      } else if (volumeSales <= 10000) {
        comission = (volumeSales * 12) / 100;
      } else if (volumeSales > 10000) {
        comission = (volumeSales * 14.5) / 100;
      }
      break;

    default:
      console.log("error");
  }

  if (comission > 0) {
    console.log(comission.toFixed(2));
  } else if (comission < 0) {
    console.log("error");
  }
}

tradeComission(["Sofia", "1500"]);
