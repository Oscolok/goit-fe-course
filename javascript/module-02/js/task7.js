'use strict';
// debugger;

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const addMess = 'Логин успешно добавлен!';
const notUniqueMess = 'Такой логин уже используется!';
const notValidMess = 'Ошибка! Логин должен быть от 4 до 16 символов';

let checkResponses;

const isLoginValid = function (login) {
  let answerValid = login.length >= 4 && login.length <= 16;
  if (answerValid !== true) {
    checkResponses = 'novalid';
  }
};

const isLoginUnique = function (allLogins, login) {
  let answerUnique = allLogins.includes(login);
  if (answerUnique !== true) {
    isLoginValid(login);
  } else {
    checkResponses = 'nounique';
  }
};

const addLogin = function (allLogins, login) {
  isLoginUnique(allLogins, login);

  if (checkResponses === 'nounique') {
    return notUniqueMess;
  } else if (checkResponses === 'novalid') {
    return notValidMess;
  } else {
    logins.push(login);
    return addMess;
  }
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'Ajax')); // 'Такой логин уже используется!' - потому что уже был добавлен в первой итеарции

// Немного другое исполнение но это всёже доп задание
