'use strict';

let input;
let total = 0;
let message;

do {
  input = prompt('Введите число');
  const numberTrue = Number(input);
  const numberTest = Number.isNaN(numberTrue);

  if (numberTest) {
    alert('Было введено не число, попробуйте еще раз');
  } else if (!numberTest) {
    total = total + numberTrue;
  }
} while (input !== null);

message = alert(`Общая сумма чисел равна ${total}`);
