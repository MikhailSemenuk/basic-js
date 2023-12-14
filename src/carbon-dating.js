const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  console.log(`sampleActivity=${sampleActivity}`);

  const sampleActivityNumber = parseFloat(sampleActivity);
  if(isNaN(sampleActivityNumber)){
    return false;
  }if(sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY){
    return false;
  }if(typeof sampleActivity !== 'string'){
    return false;
  }

  let t = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (Math.LN2 / HALF_LIFE_PERIOD);
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
