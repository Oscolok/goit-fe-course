import { error } from '@pnotify/core';

export function notification() {
  error({
    title: 'Too many matches found. Please enter a more specific query!',
    closer: false,
    sticker: false,
    icon: false,
    hide: true,
    delay: 1000,
    addClass: 'notification',
    width: '460px',
  });
}
