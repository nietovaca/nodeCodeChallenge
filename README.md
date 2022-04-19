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
* Modern-Async https://nicolas-van.github.io/modern-async/modern-async/1.1.0/global.html#map 
    #"Map over all values of an interable. Multiple calls to iteratee will be performed in parallel. If any of the calls to iteratee throws an exception the returned promise will be rejected."

Code Challenge Process 
* I started this project utilizing Postman to test routes and to see what data was coming back from the github API. 

* Server: set up basic listening with express to help with manual testing throughout build. 

* IO: input/output module establishes base URL for fetching data from GITHUB API. This module is exported and used in handler for handling get requests. 

* Handler: houses major functions for handling get requests to Github API. Because the data needs to be called using different functions/methods, there are a number of functions in this handler.
    - get pull request data (this is available at highest level of API)
    - get commits data (this is available at another URL/path on the API)
    - get commits and pull requests together and return variables with labels for easy identification and sharing of information 
    - 