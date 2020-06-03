// debugger;

const counter = document.querySelector('#counter');
const startValue = counter.querySelector('#value');
const btnInc = counter.querySelector('button[data-action="increment"]');
const btnDec = counter.querySelector('button[data-action="decrement"]');

let counterValue = Number(startValue.textContent);

const increment = function () {
  counterValue += 1;
  setValue();
};

const decrement = function () {
  counterValue -= 1;
  setValue();
};

const setValue = function () {
  startValue.textContent = counterValue;
};

btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);
