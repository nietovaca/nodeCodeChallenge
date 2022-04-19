const express = require('express');
const pullRequestsRoutes = require('./Routes');
const app = express();

//============== ==============\\
app.use('/', pullRequestsRoutes)

//============== PORT ==============\\
const port = process.env.PORT || 3000; 

//============== Listener/Escucho ==============\\
//listening on port 3000 to help with manual testing via nodemon 
app.listen(port, () => {
    console.log(`te escucho on ${port}`); 
});

