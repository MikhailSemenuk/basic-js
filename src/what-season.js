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

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  try {
    // for fakeDate
    const checkMonth = date.getUTCFullYear();
  } catch (err) {
    throw new Error('Invalid date!');
  }

  const monthToSeason = [];
  monthToSeason.push('winter');
  monthToSeason.push('winter');
  monthToSeason.push('spring');
  monthToSeason.push('spring');
  monthToSeason.push('spring');
  monthToSeason.push('summer');
  monthToSeason.push('summer');
  monthToSeason.push('summer');
  monthToSeason.push('autumn');
  monthToSeason.push('autumn');
  monthToSeason.push('autumn');
  monthToSeason.push('winter');

  return monthToSeason[date.getMonth()];
}

module.exports = {
  getSeason
};
