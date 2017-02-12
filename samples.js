
var exports = module.exports = {};

exports.noBoard = [
  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,

  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,

  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0
];

exports.wrongBoard = [
  0,0,0, 0,2,2, 3,0,0,
  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,

  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,

  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0,
  0,0,0, 0,0,0, 0,0,0
];

exports.easyBoard = [
  0,0,0, 0,9,0, 0,0,1,
  2,0,1, 5,0,6, 0,0,0,
  9,3,0, 8,0,0, 4,6,0,

  4,0,0, 2,3,0, 9,0,0,
  0,0,2, 9,0,5, 1,0,0,
  0,0,5, 0,8,1, 0,0,7,

  0,6,9, 0,0,4, 0,1,2,
  0,0,0, 1,0,9, 6,0,8,
  1,0,0, 0,7,0, 0,0,0
];

exports.evilBoard = [
  0,0,0, 1,6,0, 0,4,7,
  0,0,0, 0,0,3, 8,9,1,
  0,0,0, 0,0,0, 0,2,0,

  4,0,5, 0,0,0, 0,3,0,
  0,0,0, 3,0,5, 0,0,0,
  0,2,0, 0,0,0, 4,0,9,

  0,8,0, 0,0,0, 0,0,0,
  1,7,4, 8,0,0, 0,0,0,
  2,9,0, 0,1,7, 0,0,0
];

return module.exports