const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.body;
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

let isActive = false;
let styleSwitcher;

btnStart.addEventListener('click', () => {
  if (isActive) return;
  isActive = true;

  styleSwitcher = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(1, colors.length) - 1];
  }, 1000);
});

btnStop.addEventListener('click', () => {
  isActive = false;
  clearInterval(styleSwitcher);
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
