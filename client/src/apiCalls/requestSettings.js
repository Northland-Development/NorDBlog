const axios = require('axios').default;
const apiUrl = `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`
const apiConnectioon = axios.create({
    baseURL: apiUrl,
  });

export { apiConnectioon };