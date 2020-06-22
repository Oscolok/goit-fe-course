import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '17147509-a5fa31b8b32f1069e5373e2b3';

export const getImg = (userRequest, numberPage) => {
  return axios.get(
    `?image_type=photo&orientation=horizontal&q=${userRequest}&page=${numberPage}&per_page=16&key=${apiKey}`,
  );
};
