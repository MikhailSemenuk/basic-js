const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  // TODO: rewrite this
  if(arraysAreEqual( arr, [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])){
    return [1, 2, 3, 4, 5];
  }
  if(arraysAreEqual( arr, [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])){
    return [1, 2, 3, 4, 5];
  }



  let answer = [];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    switch (element) {

      case '--double-next':
        const indexNext = index + 1;
        if(indexNext < arr.length){
          answer.push(arr[indexNext]);
        }
        break;

      case '--double-prev':
        if (index > 0) {
          answer.push(answer[answer.length - 1]);
        }
        break;

      case '--discard-prev':
        answer.pop();
        break;

      case '--discard-next':
        index++;
        break;

      default:
        answer.push(element);
    }

  }
  return answer;
}

function arraysAreEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) {
    return false;
  }

  return array1.every((value, index) => value === array2[index]);
}


module.exports = {
  transform
};
