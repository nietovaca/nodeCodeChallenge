const express = require('express');
const app = express();
const PullRequestsRoutes = require('./Routes/handler')

//Setting up port to run local, manual testing 
const port = process.env.PORT || 3000; 

//Escucho - listening on port 3000 to help with manual testing via nodemon 
app.listen(port, () => {
    console.log(`te escucho on ${port}`); 
});

