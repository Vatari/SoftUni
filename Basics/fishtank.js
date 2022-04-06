function fishtank(input) {
	let volume = Number(input[0] * Number(input[1] * Number(input[2])));
	let volumeInLiters = volume * 0.001;
	let usedSpace = Number(input[3] / 100);
	let litersNeeded = volumeInLiters * (1 - usedSpace);

	console.log(litersNeeded);
}
fishtank(['85', '75', '47', '17']);
