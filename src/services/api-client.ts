import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8eeea72e4396477bb54726f6569e82db',
  },
});
