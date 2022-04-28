const modernAsync = require('modern-async')
const fetch = require('../io');

//========= Get Pull Request Data from API =========\\
const getPullRequests = async (userid, repo) => { 
    const pullRequestsEndpoint = `/${userid}/${repo}/pulls`
    const response = await fetch.get(pullRequestsEndpoint)
    return response.data
 }

//========= Get Commits Data from API =========\\ 
const getCommits = async (userid, repo, number) => {
    const commitsEndpoint = `/${userid}/${repo}/pulls/${number}/commits`
    const response = await fetch.get(commitsEndpoint)
    return response.data
}

//========= Map Over All Retrieved Data from API =========\\ 
const getPullRequestsAndCommits = async (pullRequests, userid, repo) => { 
    return await modernAsync.map(pullRequests, async (pullRequest) => {
        try {
            const commits = await getCommits(userid, repo, pullRequest.number)
            return {
                id: pullRequest.id,
                number: pullRequest.number,
                title: pullRequest.title, 
                author: pullRequest.user.login,
                commit_count: commits.length
            } 
        }
        catch (err) {
            throw err
        }
    }
    )
}

//========= Handle All API Data and Send || Throw Error =========\\ 
const handler = async (req, res) => {
    try {
        const pullRequests = await getPullRequests(req.params.userid, req.params.repo)
        const responseData = await getPullRequestsAndCommits(pullRequests, req.params.userid, req.params.repo)  //data is mapped here
        res.send(responseData)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports = handler;

