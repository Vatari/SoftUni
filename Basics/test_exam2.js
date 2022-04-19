function repainting(input) {
	let nylon = Number(input[0]);
	let paint = Number(input[1]);
	let thinner = Number(input[2]);
	let hoursNeeded = Number(input[3]);

	let materials = (nylon + 2) * 1.5 + (paint + paint * 0.1) * 14.5 + (thinner * 5 + 0.4);
	let workers = materials * 0.3 * hoursNeeded;
	let finalSum = materials + workers;
	console.log(finalSum);
}
repainting(['10', '11', '4', '8']);
