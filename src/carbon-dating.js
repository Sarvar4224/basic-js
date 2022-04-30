const { interfaces } = require('mocha');
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
function dateSample(carbon) {
    if (typeof(carbon)!="string" || typeof(Number(carbon))!="number")
    {
      return false;
    }
    carbon=Number(carbon);
    if (isNaN(carbon))
    {
      return false
    }
    if (carbon>15 || carbon < 1)
    {
      return false; 
    }
    let age = 0;
    age = Math.ceil((Math.log(15/carbon)/(0.693/HALF_LIFE_PERIOD)));
    return age; 
}

module.exports = {
  dateSample
};
