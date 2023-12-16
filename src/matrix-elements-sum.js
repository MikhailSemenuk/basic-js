const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sliceArrayUntilFirst0 = (arr) => {
    let index0 = arr.findIndex(val => val === 0);
    if(index0 === -1){
      index0 = undefined;
    }
    return arr.slice(0, index0);
  }
  let sumArr = (arr) => arr.reduce((sum, current) => sum + current, 0);


  return sumArr(matrix[0].map((val, index) => matrix.map(row => row[index])).reverse() // rotate Matrix
    .map(item => sumArr(sliceArrayUntilFirst0(item))));
}

module.exports = {
  getMatrixElementsSum
};
