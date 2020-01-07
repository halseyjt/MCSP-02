/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // Input: roman numeral as a string
  // Output: number
  // constraints:
  // edge cases: return null is the input is not a string

  // create a result variable
  var result = 0
  //  split the letters of the roman numeral
  var input = romanNumeral.split(' ');

  // iterate through the input 
  for (var i = 0; i < input.length; i++){
    // save current and next letters into variables
    var current = DIGIT_VALUES[input[i]];
    var next = DIGIT_VALUES[input[i + 1]];
    // if currentLetter is undefined return null
    if (!current) {
      return null;
    } else {
      // compare current and next letter to determine the greater than
      if (current < next) {
        // add nextLetter minus currentLetter to result
        result += next - current;
        // double increment to skip nextLetter
        i++
      } else {
        // add current letter to result
        result += current;
      }
    }
  }
// return the result
  return result
};
 translateRomanNumeral('VIII');

