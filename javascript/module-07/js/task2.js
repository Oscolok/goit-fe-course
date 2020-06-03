// debugger;

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const findIngList = document.querySelector('ul#ingredients');

const elemArr = ingredients.map(item => {
  const createElem = document.createElement('li');
  createElem.textContent = item;

  return createElem;
});

findIngList.append(...elemArr);

console.log(findIngList);
