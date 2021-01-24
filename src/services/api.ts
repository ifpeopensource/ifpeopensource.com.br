import axios from 'axios';

const api = axios.create({
  baseURL: `https://${process.env.GH_CLIENT_ID}:${process.env.GH_CLIENT_SECRET}@api.github.com/`,
});

export default api;
