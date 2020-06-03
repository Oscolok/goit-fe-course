// debugger;

const sizeControl = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

let setValue = sizeControl.value;

const handleInput = event => {
  getValue(event.target.value);
};

sizeControl.addEventListener('input', handleInput);

const getValue = value => {
  spanText.style.fontSize = value + 'px';
};
