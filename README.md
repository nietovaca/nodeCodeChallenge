# nodeCodeChallenge
Code Challenge utilizing Node.js and GitHub API

Dependencies: 
* npm init -y 
    #Utilizing node package manager to initialize node.js 

* Nodemon https://www.npmjs.com/package/nodemon 
    #Nodemon helps to continually monitor the app and errors that arise in production 

* Express https://www.npmjs.com/package/express
    #Express helps provide 'robust' routing for single page apps 

* Axios https://www.npmjs.com/package/axios 
    #Axios helps with http requests and is used in this application to fetch data from the GitHub API 
    #this resource helped me with axios and github api https://blog.logrocket.com/understanding-axios-create/ 

* Modern-Async https://nicolas-van.github.io/modern-async/modern-async/1.1.0/global.html#map 
    #"Map over all values of an iterable. Multiple calls to iteratee will be performed in parallel. If any of the calls to iteratee throws an exception the returned promise will be rejected."

Code Challenge Process (by file):
* I started this project utilizing Postman to test routes and to see what data was coming back from the github API. 
    NOTE for testing purposes: GitHub will only allow 100 hits an hour. See notes under IO (below) for more details. 

* Server: set up basic listening with express to help with manual testing throughout build. 

* IO: module establishes base URL for fetching data from GITHUB API. This module is exported and used in handler for handling get requests.
    * GitHub API recommends settings for header in API usage 
        - https://docs.github.com/en/rest/overview/resources-in-the-rest-api#current-version 
    * Token is required for over 100 requests an hour - see resource to find your token
        - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

* Handler: houses major functions for handling get requests to Github API. Because the data needs to be called using different functions/methods, there are a number of functions in this handler.
    * get pull request data (this is available at highest level of API)
        - /userid/repo/pulls will show all available pull request data for a given user and repo 
    * get commits data (this is available at another URL/path on the API)
        - commit numbers is not a property, but this end point will show all commits for them to be totaled in next function 
    * get commits and pull requests together and return variables with labels for easy identification and sharing of information
        - I used modern async here to provide more robust error handling while mapping over API data and returning values for rendering 
        - how to map over an async-function? 
            - googled and found it on stackoverflow 
            - maping over values in an array/iterable 
        - try/catch may be rendundant here as modern async will throw an exception if promise is rejected
    * handler pulls all needed API data together (maps over data) and sends data/response 
        - 


* Index: houses the router is main file in package.json 
    * router - express function to establish a route for rendering data on the path '/:userid/:repo'
    * fix package.json to include server.js, not index.js 

* If there were any challenges - 
    * not understanding why API stopped returning data all of a sudden, using phone to figure out what was happening

* Promise.all() - array of promises to map over, vs.  

