const fetch = require('../io');

//========= Get Pull Request Data from API =========\\
const getPullRequests = async (userid, repo) => { 
    const pullRequestsEndpoint = '/${userid}/${repo}/pulls'
    //creating path to pull requests endpoint @github api (requires userid and repo name)
    //this data is top tier from github
    //pullrequestendpoint variable will be called to simplify code on get request 
    const response = await fetch.get(pullRequestsEndpoint)
    //from baseURL(fetch) get data at the pull request endpoint
    return response.data
    //API pull request data returned in variable 'response'
 }

//========= Get Commits Data from API =========\\ 
const getCommits = async (userid, repo, number) => {
    const commitsEndpoint = `/${userid}/${repo}/pulls/${number}/commits`
    //must drill down further in API object to return commit numbers 
    const response = await fetch.get(commitsEndpoint)
    //from baseURL(fetch) get data at the commits endpoint
    return response.data
    //API pull request data returned in variable 'response'
}

const getPullRequestsAndCommits = async (pullRequests, userid, repo) => { 
    // pullrequest, userid data and repo params needed to ensure path is accessible 
    return await modernAsync.map(pullRequests, async(pullRequest) => {
        try {
            const commits = await getCommits(userid, repo, pullRequest.number)
            //call getCommits function to get commit count number 
            return {
                id: pullRequest.id,
                number: pullRequest.number,
                title: pullRequest.title, 
                author: pullRequest.user.login,
                commit_count: commits.length
                //length of commits to determine total number 
            } //return data in variables with requested labels/format 
        }
        catch (err) {
            throw err
            //error handling for calling this data (bit redundant with promise inherit in plugin)
        }
    }
    )
}

