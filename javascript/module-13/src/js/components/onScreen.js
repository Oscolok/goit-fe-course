import OnScreen from 'onscreen';

export const os = new OnScreen({
  tolerance: -100,
  debounce: 100,
  container: window,
});
