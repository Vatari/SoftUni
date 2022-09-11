function basketballExpenses(input) {
	let tax = Number(input[0]);
	let shoes = tax * 0.6;
	let equip = shoes * 0.8;
	let ball = equip * (1 / 4);
	let accesories = ball * (1 / 5);
	let totalSum = tax + shoes + equip + ball + accesories;
	console.log(totalSum);
}
basketballExpenses(['365']);
basketballExpenses(['221']);

