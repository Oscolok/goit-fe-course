import localStorage from './localStorage';

const themeSwitcher = document.querySelector('input.js-switch-input');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitcher.addEventListener('change', test);

const isDarkTheme = localStorage.load('isDarkTheme');

if (isDarkTheme) {
  body.classList.add(Theme.DARK);
  themeSwitcher.checked = isDarkTheme;
}

function test(event) {
  if (event.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.save('isDarkTheme', true);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.save('isDarkTheme', false);
  }
}
