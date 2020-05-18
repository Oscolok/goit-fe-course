'use strict';
// debugger;

const checkForSpam = function (message) {
  let findSale = 'sale';
  let findSpam = 'spam';

  const newMesssage = message.toLowerCase();

  if (newMesssage.includes(findSale) || newMesssage.includes(findSpam)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
