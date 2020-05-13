'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const enterPass = prompt('Введите пароль администратора:');

const answerUser = enterPass;

if (answerUser === null) {
  message = 'Отменено пользователем!';
} else if (answerUser === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);
