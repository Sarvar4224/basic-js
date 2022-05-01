const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
      str=String(date);
      if(date==undefined)
      return 'Unable to determine the time of year!'
      if (str.includes("Aug")||str.includes("Jul")||str.includes("Jun"))
      return "summer";
      if (str.includes("Jan")||str.includes("Feb") || str.includes("Dec"))
      return "winter";
      if (str.includes("Apr")||str.includes("May") || str.includes("Mar"))
      return "spring";
      if (str.includes("Sep")||str.includes("Oct") || str.includes("Nov"))
      return "autumn";
      if(date==false)
      throw new Error("Invalid date!"); 
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
