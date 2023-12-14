const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let characterMap = new Map;

  let fillCharacterMap = (index = 0, str) => {
      for (const character of str) {
          let currentValue = characterMap.get(character);
          if(currentValue === undefined){
              currentValue = [0, 0]; // basic value
          }
          currentValue[index] += 1;
          characterMap.set(character, currentValue);

      }
  }

  let countCommonCharacter = () => {
      let counterCommonCharacter = 0;
      for (const iterator of characterMap) {
          counterCommonCharacter += Math.min( ...iterator[1] );
      }
      return counterCommonCharacter;
  }

  fillCharacterMap(0, s1);
  fillCharacterMap(1, s2);
  return countCommonCharacter();
}

module.exports = {
  getCommonCharacterCount
};
