# nodeCodeChallenge
Code Challenge utilizing Node.js and GitHub API

Dependencies: 
* npm init -y 
    #utilizing node package manager to initialize node.js 
* Nodemon https://www.npmjs.com/package/nodemon 
    #nodemon helps to continually monitor the app and errors that arise in production 
* Express https://www.npmjs.com/package/express
    #express helps provide 'robust' routing for single page apps 
* Axios https://www.npmjs.com/package/axios 
    #axios helps with http requests and is used in this application to fetch data from the GitHub API 


Code Challenge Process 
* I started this project utilizing Postman to test routes and to see what data was coming back from the github API. 

* Server: set up basic listening with express to help with manual testing throughout build. 

* IO: input/output module establishes base URL for fetching data from GITHUB API. This module is exported and used in handler for handling get requests. 

* Handler: houses major functions for handling get requests to Github API. Because the data needs to be called using different functions/methods, there are a number of functions in this handler. 