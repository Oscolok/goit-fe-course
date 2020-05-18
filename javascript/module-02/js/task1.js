'use strict';
// debugger;

const logItems = function (array22) {
  for (let i = 0; i < array22.length; i += 1) {
    console.log(i + 1 + ` - ` + array22[i]);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
