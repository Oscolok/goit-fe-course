const baseUrl = 'https://restcountries.eu/rest/v2/name/';

const getAllCountry = searchQuery => {
  return fetch(baseUrl + searchQuery).then(res => res.json());
};

export default { getAllCountry };
