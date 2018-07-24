import axios from 'axios';

const instance = axios.create({
  baseURL: 'firebase url'
});

export default instance;