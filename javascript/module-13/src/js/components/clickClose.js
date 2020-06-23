import { refs } from './refs';

function hendleClickClose() {
  refs.lightbox.classList.remove('is-open');
  refs.body.classList.remove('body-hide');
  refs.body.removeEventListener('keyup', handleKeyEsc);
}

function handleKeyEsc(event) {
  if (event.key === 'Escape' && refs.lightbox.classList.contains('is-open')) {
    refs.lightbox.classList.remove('is-open');
    refs.body.classList.remove('body-hide');
    refs.body.removeEventListener('keyup', handleKeyEsc);
  }
}

export { hendleClickClose, handleKeyEsc };
