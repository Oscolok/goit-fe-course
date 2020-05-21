'use strict';
// debugger;

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.log(user);

user.mood = 'happy';

console.log(user);

user.hobby = 'skydiving';

console.log(user);

user.premium = false;

console.log(user);

// var 1
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// var 2
// const entries = Object.entries(user);

// for (const entry of entries) {
//   console.log(`${entry[0]}: ${entry[1]}`);
// }
