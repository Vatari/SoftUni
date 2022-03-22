"use strict";

function solve(arr) {
  // Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
  var sumOdd = 0;
  var sumEven = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var number = _step.value;

      if (number % 2 == 0) {
        sumEven += number;
      } else {
        sumOdd += number;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(sumEven - sumOdd);
}

solve([1, 2, 3, 4, 5, 6]);