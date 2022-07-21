function sortAnArrayBy2Criteria(arr) {
  arr.sort(twoCriteriaSort);
 // arr.forEach((el) => console.log(el));
  console.log(arr.join('\n'));

  function twoCriteriaSort(current, next) {
    if (current.length === next.length) {
      return current.localeCompare(next);
    }
    return current.length - next.length;
  }
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
