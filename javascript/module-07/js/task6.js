// debugger;

const input = document.querySelector('input#validation-input');

input.style.outline = 'none';

const handleInput = event => {
  if (event.target.value.length === 0) {
    event.target.removeAttribute('class');
  } else if (
    event.target.value.length ===
    Number(event.target.getAttribute('data-length'))
  ) {
    event.target.setAttribute('class', 'valid');
  } else {
    event.target.setAttribute('class', 'invalid');
  }
};

input.addEventListener('blur', handleInput);
