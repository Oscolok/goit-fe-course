'use strict';
// debugger;
let yourCuntry = prompt('Укажите вашу страну:');
yourCuntry = yourCuntry.toLowerCase();

let price;
let text;

switch (yourCuntry) {
  case 'китай':
    price = '100';
    break;

  case 'чили':
    price = '250';
    break;

  case 'австралия':
    price = '170';
    break;

  case 'индия':
    price = '80';
    break;

  case 'ямайка':
    price = '120';
    break;

  default:
    price = '0';
}

yourCuntry = yourCuntry[0].toUpperCase() + yourCuntry.slice(1);

if (price > '0') {
  text = `Доставка в ${yourCuntry} будет стоить ${price} кредитов`;
  console.log(text);
} else {
  text = alert('В вашей стране доставка не доступна');
}
