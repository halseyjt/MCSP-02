/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var isPalindrome = function (string) {
    var rev = string.split("").reverse().join("");
    return string == rev;   
};
var longestPalindrome = function (string) {
    var maxLength = 0;
    var maxP = '';
    for (var i = 0; i < string.length; i++){
        var subs = string.substr(i, string.length);
        for (var j = subs.length; j >= 0; j--){
            var subSubsStr = subs.substr(0, j);
            if (subSubsStr.length <= 1) {
                continue;
            }    
                if (isPalindrome(subSubsStr)) {
                    if (subSubsStr.length > maxLength) {
                        maxLength = subSubsStr.length;
                        maxP = subSubsStr
                }
            }
        }    
    }
    return maxP;
 };
console.log(longestPalindrome("My dad is a racecar athlete"));