const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let numberConsecutiveCharacters = (checkCharacter, indexStart , str) => {
      let answer = 0;
      for (let index = indexStart; index < str.length; index++) {
          if(checkCharacter === str[index]){
              answer++;
          }else{
              return answer;
          }
      }
      return answer;
  }

  let answer = [];
  let lastCharacter;
  for (let index = 0; index < str.length; index++) {
    const character = str.at(index);

    if(character === lastCharacter){
      continue;
    }else{
      answer.push(`${numberConsecutiveCharacters(character, index, str)}${character}`)
    }

    lastCharacter = character;
  }
  return answer.map(str => str.at(0) === '1' ? str.at(1) : str).join('');
}


module.exports = {
  encodeLine
};
