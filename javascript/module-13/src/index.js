import './css/styles.css';
import { getImg } from './js/components/api';
import { os } from './js/components/onScreen';
import { refs } from './js/components/refs';
import { markupHandler } from './js/components/markupHandler';
import { hendleClickClose, handleKeyEsc } from './js/components/clickClose';
import { hendleClickItem } from './js/components/clickItem';

let userRequest = '';
let numberPage = 1;
let requestHavePage = 0;

refs.searchForm.addEventListener('submit', hendleUserRequest);
refs.galleryList.addEventListener('click', hendleClickItem);
refs.lightbox.addEventListener('click', hendleClickClose);

createMarkup('  ');

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

      requestHavePage = Math.ceil(res.data.total / 20);

      if (res.data.total > 20) {
        refs.loadMore.classList.remove('load-more-disabled');
      }

      console.log(
        `Найдено ${res.data.total} изображений на ${requestHavePage} страницах`,
      );
    })
    .catch(err => console.log(err));
}

refs.loadMore.addEventListener('click', hendleClickLoadMore);

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
