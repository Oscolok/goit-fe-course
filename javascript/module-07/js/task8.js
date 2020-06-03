// debugger;

const controlPanel = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

const input = controlPanel.querySelector('input');
const render = controlPanel.querySelector('button[data-action="render"]');
const destroy = controlPanel.querySelector('button[data-action="destroy"]');

let getValues = 0;
function getNumber(selectedValue) {
  getValues =
    Number(selectedValue.target.value) <= Number(input.getAttribute('max'))
      ? Number(selectedValue.target.value)
      : alert(`Максимальное число ${Number(input.getAttribute('max'))}`);
}
input.addEventListener('input', getNumber);

let startValues = 30;

function createBoxes() {
  let element;

  for (let i = 1; i <= getValues; i += 1) {
    element = document.createElement('div');

    element.style.width = `${startValues}px`;
    element.style.height = `${startValues}px`;
    element.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255,
    )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;

    startValues += 10;

    boxes.appendChild(element);
  }
}
render.addEventListener('click', createBoxes);

function removeBoxes() {
  const allDiv = boxes.querySelectorAll('div');

  for (const oneDiv of allDiv) {
    oneDiv.remove();
  }

  startValues = 30;
}
destroy.addEventListener('click', removeBoxes);

// На это ушло очень много времени и думаю можно было реализовать лучше, но я смог только так
