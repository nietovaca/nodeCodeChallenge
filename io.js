const axios = require('axios');

//========== CREATE BaseURL Route =============\\
const fetch = axios.create({
    //(new instance of axios: config custom baseURL to access github api)
    baseURL: 'https://api.github.com/repos',
    headers: {
        'Accept': 'application/vnd.GitHub.v3+json', //recommended to add this from Github API Documentation - see README
        //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
})

module.exports = fetch; 
