const http= require('http');

const express = require('express');
const app = express();

app.use((req, res, next)=> {
    console.log("first")
    next(); // passes control to next middleware
})

app.use((req, res, next)=> {
    console.log("second")

    res.send()

})

//const server = http.createServer(app);

//server.listen(3000);

app.listen(3000)