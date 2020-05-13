'use strict';
let credits = 23580;
const pricePerDroid = 3000;
let message;

const ansverUser = prompt('Какое колличество дроидов вам нужно?');

const totalPrice = ansverUser * pricePerDroid;
const loanBalance = credits - totalPrice;

if (ansverUser === null) {
  message = 'Отменено пользователем!';
} else if (loanBalance <= '0') {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${ansverUser} дроидов, на счету осталось ${loanBalance} кредитов.`;
}

console.log(message);
