/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function (ceiling) {
  let smNum = 1;
  let divisible = 0;
  while (divisible < ceiling) {
    divisible = 0;
    smNum++
    for (let i = 1; i <= ceiling; i++) {
      if (smNum % i === 0) {
        divisible++
      } else {
        break;
      }
    }
  }
  return smNum;
};