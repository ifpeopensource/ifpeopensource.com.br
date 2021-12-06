import axios from 'axios';

const ghApi = axios.create({
  baseURL: `https://api.github.com/`,
  headers: {
    authorization: `Bearer ${process.env.GH_TOKEN}`,
  },
});

export default ghApi;
