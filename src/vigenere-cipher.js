const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  encrypt(phrase, key) {

    console.error(`!!!!!  phrase=${phrase}, key=${key}`);

    if (arguments.length < 2 || typeof phrase !== 'string' ||  typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }

    let letPhraseArray = phrase.toUpperCase().split('');
    let keyArray = key.toUpperCase().repeat(Math.ceil(phrase.length / key.length)).split('');

    let answer = [];
    for (const character of letPhraseArray) {

      if ( !itsAlphabetCharacter(character)) {
        answer.push(character);
      } else {
        const positionCh = getAlphabetPosition(character);
        const currentKey = keyArray.shift();
        const positionKey = getAlphabetPosition(currentKey);

        let newPosition = positionCh + positionKey;
        if (newPosition > 25) {
          newPosition -= 26;
        }

        const shiftCharacter = getLetterByPosition(newPosition);
        answer.push(shiftCharacter);
      }

    }

    return answer.join('');
  }

  decrypt(phrase, key) {

    console.error(`!!!!!  phrase=${phrase}, key=${key}`);

    if (arguments.length < 2 || typeof phrase !== 'string' ||  typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }

    let letPhraseArray = phrase.toUpperCase().split('');
    let keyArray = key.toUpperCase().repeat(Math.ceil(phrase.length / key.length)).split('');

    let answer = [];
    for (const character of letPhraseArray) {

      if ( !itsAlphabetCharacter(character)) {
        answer.push(character);
      } else {
        const positionCh = getAlphabetPosition(character);
        const currentKey = keyArray.shift();
        const positionKey = getAlphabetPosition(currentKey);

        let newPosition = positionCh - positionKey;
        if (newPosition < 0) {
          newPosition += 26;
        }

        const shiftCharacter = getLetterByPosition(newPosition);
        answer.push(shiftCharacter);
      }

    }

    return answer.join('');
  }


}

function getAlphabetPosition(letter) {
  const alphabetStart = 'A'.charCodeAt(0);
  return letter.toUpperCase().charCodeAt(0) - alphabetStart;
}

function itsAlphabetCharacter(character) {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) !== -1;
}

function getLetterByPosition(position) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[position];
}



module.exports = {
  VigenereCipheringMachine
};
