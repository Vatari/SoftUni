function greening(input) {
	let totalSum = Number(input[0] * 7.61);
	let discount = totalSum * 0.18;
	let finalSum = totalSum - discount;
	console.log(`The final price is: ${finalSum} lv.`);
	console.log(`The discount is: ${discount} lv.`);
}
greening(['150']);
