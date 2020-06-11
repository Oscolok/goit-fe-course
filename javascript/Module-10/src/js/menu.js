import menu from '../bd/menu.json';
import menuTemp from '../templates/menuTemp.hbs';

// console.log(menuTemp);

const menuList = document.querySelector('.js-menu');

// const allLI = menu.map(item => menuTemp(item)).join('');
// menuList.insertAdjacentHTML('beforeend', allLI);

const allLI = menuTemp(menu);
menuList.insertAdjacentHTML('beforeend', allLI);
