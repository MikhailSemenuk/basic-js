const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArrayExceptMinus1 = arr.filter(item => item !== -1).sort((a, b) => a - b);

  let answer = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === -1) {
      answer.push(element);
    } else {
      answer.push(sortArrayExceptMinus1.shift());
    }
  }
  return answer;
}

module.exports = {
  sortByHeight
};
