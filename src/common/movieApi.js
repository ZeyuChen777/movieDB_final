import axios from 'axios';
const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'af3ad269dc54a8aacf2c6204fc737af1'
  },
});

export default movieApi;