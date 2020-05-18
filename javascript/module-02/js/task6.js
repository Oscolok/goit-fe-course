'use strict';
// debugger;

let input;
const numbers = [];
let total = 0;

for (let i = 1; i > 0; i += 1) {
  input = prompt('Введите число в поле счетчика');
  let toNumber = Number(input);
  let numberTest = Number.isNaN(toNumber);

  if (numberTest) {
    alert('Неверная запись числа, попробуйте еще раз');
  } else {
    if (toNumber > 0) {
      numbers.push(toNumber);
    } else {
      for (const counter of numbers) {
        total = total + counter;
      }
      break;
    }
  }
}

console.log(`Общая сумма чисел равна ${total}`);

// не знаю правильно ли так и можно ли было проще, но я решил так. буду рад отзыву
