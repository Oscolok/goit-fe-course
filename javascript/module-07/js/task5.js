// debugger;

const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

const startText = span.textContent;

const handleInput = event => {
  if (event.target.value !== '') {
    span.textContent = event.target.value;
  } else {
    span.textContent = startText;
  }
};

input.addEventListener('input', handleInput);
