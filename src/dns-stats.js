const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let combinationDomains = [];
  for (const domain of domains) {
     let reverseArray = domain.split('.').reverse();
     for (let index = 1; index <= reverseArray.length; index++) {
      combinationDomains.push(reverseArray.slice(0, index));
     }
  }

  let counterMap = new Map();
  for (const iterator of combinationDomains) {

      const nameProperty = '.' + iterator.join('.')

      if(counterMap.has(nameProperty)){
          counterMap.set(nameProperty, counterMap.get(nameProperty)+1);
      }else{
          counterMap.set(nameProperty, 1);
      }
  }
  return Object.fromEntries(counterMap);
 }

module.exports = {
  getDNSStats
};
