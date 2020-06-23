import { refs } from './refs';
import { handleKeyEsc } from './clickClose';

export function hendleClickItem(event) {
  if (event.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.body.classList.add('body-hide');

    refs.body.addEventListener('keyup', handleKeyEsc);
    refs.lightbox.children[1].innerHTML = `<img class="lightbox__image" src="${event.target.dataset.largesrc}" alt="${event.target.alt}" />`;
  }
}
