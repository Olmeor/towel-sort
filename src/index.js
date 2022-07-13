
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix = (matrix === undefined) ? [] : matrix.reduce((prev, item, index) => index % 2 === 0 ? prev.concat(item) : prev.concat(item.reverse()), []);
}

/*module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  return arr = matrix.reduce((prev, item, index) => index % 2 === 0 ? prev.concat(item) : prev.concat(item.reverse()), []);
}*/

/*module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined) return arr;
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      arr = arr.concat(matrix[i]);
    } else {
      arr = arr.concat(matrix[i].reverse());
    }
  }
  return arr;
}*/