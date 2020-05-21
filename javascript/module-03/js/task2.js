'use strict';
// debugger;

const countProps = function (obj) {
  const objLength = Object.entries(obj).length;
  return objLength;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
