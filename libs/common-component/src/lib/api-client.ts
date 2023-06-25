import axios from 'axios';

const ApiClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default ApiClient;

