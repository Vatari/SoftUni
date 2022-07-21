function cutAndReverse(text) {
  text = text.split("");

  let half = text.length / 2;

  let firstHalf = text.splice(0, half);
  let secondHalf = text.splice(-half);

  console.log(
    `${firstHalf.reverse().join("")}\n${secondHalf.reverse().join("")}`
  );
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
