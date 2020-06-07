import name from './gallery-items.js';

const gallList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeButton = lightbox.querySelector(
  'button[data-action="close-lightbox"]',
);

//Создание и рендер разметки по массиву данных и предоставленному шаблону
const fnMap = name
  .map(
    obj =>
      `<li class="gallery__item"><a class="gallery__link" href="${obj.original}"><img class="gallery__image" src="${obj.preview}" data-source="${obj.original}" alt="${obj.description}"/></a></li>`,
  )
  .join('');
gallList.insertAdjacentHTML('afterbegin', fnMap);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения
gallList.addEventListener('click', handleImgClick);

function handleImgClick(event) {
  event.preventDefault();

  const target = event.target;

  if (event.target.nodeName === 'IMG') {
    openModalWindow(target);
  }
}

// Открытие модального окна по клику на элементе галереи
function openModalWindow(imgItem) {
  lightbox.classList.add('is-open');

  newValue(imgItem);
}

// Подмена значения атрибута src элемента img.lightbox__image
function newValue(imgItem) {
  lightboxImg.setAttribute('src', imgItem.dataset.source);
  lightboxImg.setAttribute('alt', imgItem.alt);
}

// Закрытие модального окна по клику на кнопку button[data-action="close-modal"]
closeButton.addEventListener('click', handleCloseClick);

function handleCloseClick(event) {
  lightbox.classList.remove('is-open');
  lightboxImg.setAttribute('src', '');
  lightboxImg.setAttribute('alt', '');
}

// Закрытие модального окна по клику на div.lightbox__overlay
lightbox.addEventListener('click', handleOverlayClick);

function handleOverlayClick(event) {
  if (event.target.nodeName !== 'IMG') {
    lightbox.classList.remove('is-open');
    lightboxImg.setAttribute('src', '');
    lightboxImg.setAttribute('alt', '');
  }
}

// Закрытие модального окна по нажатию клавиши ESC
gallList.addEventListener('keyup', handleKeyUp);

function handleKeyUp(KeyUp) {
  if (KeyUp.key === 'Escape' && lightbox.classList.contains('is-open')) {
    handleCloseClick();
  }
}
