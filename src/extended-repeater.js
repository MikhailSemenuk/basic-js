const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (!('separator' in options)) {
    options['separator'] = '+'; // default
  }
  if (!('additionSeparator' in options)) {
    options['additionSeparator'] = '|'; // default
  }
  if (('addition' in options)) {
    options['addition'] = String(options['addition']);
  }
  str = String(str);


  const addition = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
  return new Array(options.repeatTimes).fill(str + addition).join(options.separator);
}

module.exports = {
  repeater
};
