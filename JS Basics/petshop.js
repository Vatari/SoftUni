function petshop(input) {
	let dogFood = Number(input[0]) * 2.5;
	let catFood = Number(input[1]) * 4;

	let totalSumForFood = dogFood + catFood;
	console.log(` ${totalSumForFood} lv.`);
}
petshop(['5', '4']);
