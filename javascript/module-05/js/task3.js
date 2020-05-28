'use strict';
// debugger;

class Storage {
  constructor(arr) {
    this.arr = arr;
  }

  getItems() {
    return this.arr;
  }

  get items() {
    return this.arr;
  }

  addItem(item) {
    this.arr.push(item);
  }

  removeItem(item) {
    const itemId = this.arr.indexOf(item);
    this.arr.splice(itemId, 1);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
