'use strict';
// debugger;

const findLongestWord = function (string) {
  const array22 = string.split(' ');
  let longestWord = array22[0];

  for (const word of array22) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
