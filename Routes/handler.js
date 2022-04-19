const fetch = require('../io');

const getPullRequests = async (userid, repo) => { 
    const pullRequestsEndpoint = '/${userid}/${repo}/pulls'
    //creating path to pull requests endpoint @github api (requires userid and repo name)
    //pullrequestendpoint variable will be called to simplify code on get request 
    const response = await fetch.get(pullRequestsEndpoint)
    return response.data
 }