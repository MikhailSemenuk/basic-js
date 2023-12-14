const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayN = Array.from(String(n), Number);
  let variationArray = [];
  for (let index = 0; index < arrayN.length; index++) {
      variationArray.push(arrayN.slice(0, index).concat(arrayN.slice(index + 1)));
  }
  let variationArrayNumber = variationArray.map(item => Number(item.join('')));
  return Math.max(...variationArrayNumber);
}

module.exports = {
  deleteDigit
};
