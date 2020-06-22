import './css/styles.css';
import { getImg } from './js/api/apiService';
import imgCard from './js/tamplates/imgList.hbs';
import OnScreen from 'onscreen';

let userRequest = '';
let numberPage = 1;
let requestHavePage = 0;

const refs = {
  body: document.querySelector('body'),
  searchForm: document.querySelector('#search-form'),
  galleryList: document.querySelector('.js-gallery-list'),
  notFound: document.querySelector('.not-found'),
  lightbox: document.querySelector('.js-lightbox'),
  loadMore: document.querySelector('.js-load-more'),
};

refs.searchForm.addEventListener('submit', hendleUserRequest);
refs.galleryList.addEventListener('click', hendleClickItem);
refs.lightbox.addEventListener('click', hendleClickClose);
refs.loadMore.addEventListener('click', hendleClickLoadMore);

createMarkup(' ');

const os = new OnScreen({
  tolerance: -100,
  debounce: 100,
  container: window,
});

os.on('enter', '.js-load-more', (element, event) => {
  hendleClickLoadMore();
});

function hendleUserRequest(event) {
  event.preventDefault();
  numberPage = 1;
  userRequest = event.target.firstElementChild.value;

  refs.notFound.textContent = '';
  refs.loadMore.classList.add('load-more-disabled');

  if (userRequest !== '') {
    createMarkup(userRequest);
  }
}

function createMarkup(userRequest) {
  getImg(userRequest, numberPage)
    .then(res => {
      refs.searchForm.style.transform = 'translateY(0)';
      const readyMarkup = markupHandler(res.data.hits);

      if (res.data.total !== 0) {
        refs.galleryList.innerHTML = `${readyMarkup}`;
      } else {
        refs.notFound.textContent = 'No images for your request';
      }

      requestHavePage = Math.ceil(res.data.total / 16);

      if (res.data.total > 16) {
        refs.loadMore.classList.remove('load-more-disabled');
      }

      console.log(
        `Найдено ${res.data.total} изображений на ${requestHavePage} страницах`,
      );
    })
    .catch(err => console.log(err));
}

function markupHandler(res) {
  return imgCard(res);
}

function hendleClickItem(event) {
  if (event.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.body.classList.add('body-hide');

    refs.body.addEventListener('keyup', handleKeyEsc);
    refs.lightbox.children[1].innerHTML = `<img class="lightbox__image" src="${event.target.dataset.largesrc}" alt="${event.target.alt}" />`;
  }
}

function hendleClickClose(event) {
  if (event.target.nodeName !== 'IMG') {
    refs.lightbox.classList.remove('is-open');
    refs.body.classList.remove('body-hide');
    refs.body.removeEventListener('keyup', handleKeyEsc);
  }
}

function handleKeyEsc(event) {
  if (event.key === 'Escape' && refs.lightbox.classList.contains('is-open')) {
    refs.lightbox.classList.remove('is-open');
    refs.body.classList.remove('body-hide');
    refs.body.removeEventListener('keyup', handleKeyEsc);
  }
}

function hendleClickLoadMore() {
  numberPage += 1;

  refs.loadMore.classList.add('load-more-disabled');

  if (numberPage < requestHavePage) {
    refs.loadMore.classList.remove('load-more-disabled');
  }

  getImg(userRequest, numberPage)
    .then(res => {
      const readyMarkup = markupHandler(res.data.hits);
      refs.galleryList.insertAdjacentHTML('beforeend', `${readyMarkup}`);
    })
    .catch(err => console.log(err));
}
