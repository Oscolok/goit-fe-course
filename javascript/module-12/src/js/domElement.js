import objCountries from './fetchCountries';
import { notification } from './components/notify';
import tempOneCountry from './templates/oneCountry.hbs';
import tempManyCountrys from './templates/manyCountrys.hbs';
import debounce from 'lodash.debounce';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  input: document.querySelector('.js-search-form-itput'),
  findCountry: document.querySelector('.js-find-country'),
};

refs.input.addEventListener('input', debounce(hendleWriteText, 1000));
refs.findCountry.addEventListener('click', hendleClickCountry);

function hendleWriteText(event) {
  let findText = event.target.value;

  refs.findCountry.innerHTML = '';
  refs.searchForm.classList.remove('search-form-have');
  refs.findCountry.classList.remove('find-country-switcher');

  if (findText !== '') {
    makeFetch(findText);
  }
}

function makeFetch(findText) {
  objCountries
    .getAllCountry(findText)
    .then(data => {
      const country = markup(data);

      if (data.length > 10) {
        notification();
      }
      if (data.length <= 10 || data.length === undefined) {
        refs.findCountry.innerHTML = `${country}`;
        refs.searchForm.classList.add('search-form-have');
        refs.findCountry.classList.add('find-country-switcher');
      }
    })
    .catch(err => console.log(err));
}

function markup(data) {
  if (data.status === 404) {
    return tempManyCountrys([{ name: 'Not found' }]);
  }
  if (data.length === 1) {
    return tempOneCountry(data);
  }
  if (data.length > 1) {
    return tempManyCountrys(data);
  }
}

function hendleClickCountry(event) {
  if (event.target.nodeName === 'H2') {
    refs.input.value = event.target.textContent;
    makeFetch(event.target.textContent);
  }
}
