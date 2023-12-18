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

  arr = arr.map(item => ({ item, 'counter': 1 }));

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const indexNext = index + 1;
    const indexLast = index - 1;

    switch (element.item) {


      case '--double-next':

        if (indexNext < arr.length) {
          arr[indexNext].counter++;
        }
        break;

      case '--discard-next':
        if (indexNext < arr.length) {
          arr[indexNext].counter--;
        }
        break;

      case '--double-prev':
        if(indexLast > 0 && arr[indexLast].counter > 0) {
          arr[indexLast].counter++;
        }
        break;

      case '--discard-prev':
        if(indexLast > 0){
          arr[indexLast].counter--;
        }

        break;
    }

  }

  let answer = [];
  for (const element of arr) {
    if(element.item === '--discard-prev' || element.item === '--double-prev' ||  element.item === '--discard-next' || element.item === '--double-next'){
      continue;
    }else if(element.counter > 0){
      for (let index = 0; index < element.counter; index++) {
        answer.push(element.item);
      }
    }

  }

  return answer;
}

module.exports = {
  transform
};
