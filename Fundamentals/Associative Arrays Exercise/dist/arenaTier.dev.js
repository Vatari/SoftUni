"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function solve(arr) {
  var gladiators = {};

  while (arr[0] != "Ave Cesar") {
    var _arr$shift$split = arr.shift().split(" -> "),
        _arr$shift$split2 = _slicedToArray(_arr$shift$split, 3),
        name = _arr$shift$split2[0],
        skill = _arr$shift$split2[1],
        skillPoints = _arr$shift$split2[2];

    skillPoints = +skillPoints;

    if (!gladiators[name]) {
      gladiators[name] = [];
    }

    gladiators[name].push(skill, skillPoints);

    if (gladiators[name][0].includes(skill)) {
      if (gladiators[name][1] < skillPoints) {
        gladiators[name][1] = skillPoints;
      }
    } //  if (gladiators[name].)

  }

  console.log(gladiators);
}

solve(["Peter -> BattleCry -> 400", "Alex -> PowerPunch -> 300", "Stefan -> Duck -> 2223423423400", "Stefan -> Tiger -> 11250", "Stefan -> Tiger -> 1111250", "Ave Cesar"]);