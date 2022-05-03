function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let shieldCount = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      expenses += +helmetPrice;
    }
    if (i % 3 === 0) {
      expenses += +swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      expenses += +shieldPrice;
      shieldCount++;
    }
    if (shieldCount % 2 === 0 && shieldCount > 0) {
      expenses += +armorPrice;
      shieldCount = 0;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);

/* •	Every second lost game, his helmet is broken.
•	Every third lost game, his sword is broken.
•	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
•	Every second time, when his shield brakes, his armor also needs to be repaired.  */
