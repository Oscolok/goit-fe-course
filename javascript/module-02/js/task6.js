'use strict';
// debugger;

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число в поле счетчика');

  if (Number.isNaN(Number(input))) {
    alert('Неверная запись числа, попробуйте еще раз');
  } else if (Number(input) > 0) {
    numbers.push(Number(input));
  }
} while (input !== null);

for (const element of numbers) {
  total = total + element;
}

console.log(`Общая сумма чисел равна ${total}`);
