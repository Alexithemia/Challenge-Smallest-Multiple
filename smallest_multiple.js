module.exports = function (ceiling) {
  //variables
  let smNum = 1;
  let divisible = 0;
  //ends when smNum is evenly divisible by evey number from 1 - ceiling
  while (divisible < ceiling) {
    //resets divisible if last iteration does not divide by all numbers evently
    divisible = 0;
    //increases number to divide every iteration
    smNum++
    //loops through each number up to ceiling
    for (let i = 1; i <= ceiling; i++) {
      //if number is evenly divisible, add to varible to check in while loop else break loop, continued checks unneeded.
      if (smNum % i === 0) {
        divisible++
      } else {
        break;
      }
    }
  }
  return smNum;
};