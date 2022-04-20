const express = require('express');
const pullRequestsRoutes = require('./Routes');
const app = express();

//============== ==============\\
app.use('/', pullRequestsRoutes)

//============== PORT ==============\\
const port = process.env.PORT || 3000; 

//============== Listener/Escucho ==============\\
app.listen(port, () => {
    console.log(`te escucho on ${port}`); 
});

