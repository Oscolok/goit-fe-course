'use strict';
// debugger;

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    account.transactions.push({
      id: account.transactions.length + 1,
      amount,
      type,
    });
    if (type === 'deposit') {
      console.log(`Ваш счёт пополнен на ${amount}$`);
    } else if (type === 'withdraw') {
      console.log(`Вы сняли наличных на сумму ${amount}$`);
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    account.balance += amount;
    account.createTransaction(amount, Transaction.DEPOSIT);
    account.getBalance();
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= account.balance) {
      account.balance -= amount;
      account.createTransaction(amount, Transaction.WITHDRAW);
      account.getBalance();
    } else {
      console.log(`Невозможно снять ${amount}$, недостаточно средств`);
      account.getBalance();
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Текущий баланс: ${this.balance}$`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const { amount, type } = account.transactions[id - 1];
    let typeTranlate;
    if (type === 'deposit') {
      typeTranlate = 'пополнено';
    } else if (type === 'withdraw') {
      typeTranlate = 'снято';
    }
    console.log(`Транзакция №${id}: ${typeTranlate} - ${amount}$`);

    // if (id <= account.transactions.length) {
    //   const { amount, type } = account.transactions[id - 1];
    //   console.log(`Транзакция №${id}; Тип: ${type}; Сумма: ${amount}$.`);
    // } else {
    //   console.log(`Транзакция №${id} не обнаружена`);
    // }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    for (let h = 1; h <= account.transactions.length; h++) {
      const objToArr = Object.values(account.transactions[h - 1]);
      const searchType = objToArr.includes(type);
      if (searchType === true) {
        account.getTransactionDetails(h);
      }
    }
    // console.log(Object.keys(account.transactions[0]));
  },
};

// Вызов текущего баланса
account.getBalance();
console.log('============================');
// Пополнение баланса + вызов текущего
account.deposit(999);
console.log('============================');
// Пополнение баланса + вызов текущего
account.deposit(1);
console.log('============================');
// Снятите наличных + вызов текущего баланса
account.withdraw(500);
console.log('============================');
// Снятите наличных + вызов текущего баланса
account.withdraw(550);
console.log('============================');
// Снятите наличных + вызов текущего баланса
account.withdraw(500);
console.log('============================');
// Пополнение баланса + вызов текущего
account.deposit(20000);
console.log('============================');
// Снятите наличных + вызов текущего баланса
account.withdraw(5000);
console.log('============================');

// Вывод истории транзакций
console.log('    История транзакций:');
for (let j = 1; j <= account.transactions.length; j++) {
  account.getTransactionDetails(j);
}
console.log('============================');

// Вывод истории транзакций по типу
console.log('    История транзакций пополнений:');
account.getTransactionTotal(Transaction.DEPOSIT);
console.log('============================');
console.log('    История транзакций снятий:');
account.getTransactionTotal(Transaction.WITHDRAW);
console.log('============================');
