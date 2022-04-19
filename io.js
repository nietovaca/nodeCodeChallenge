const axios = require('axios');

const fetch = axios.create({
    baseURL: 'https://api.github.com/repos'
})

module.exports = fetch; 
