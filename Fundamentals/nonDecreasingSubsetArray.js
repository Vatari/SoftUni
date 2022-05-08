function nonDecreasingSubsetArray(arr) {
  let max = arr[0];

  let filter = arr.filter((current) => {
    if (current >= max) {
      max = current;
    }
    return current >= max;
  });

  console.log(filter.join(" "));
}

nonDecreasingSubsetArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsetArray([1, 2, 3, 4]);
nonDecreasingSubsetArray([20, 3, 2, 15, 6, 1]);
