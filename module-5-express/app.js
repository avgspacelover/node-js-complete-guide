const http= require('http');

const express = require('express');
const app = express();

app.use('/',(req, res, next)=> {
    console.log("always runs")
    next(); // passes control to next middleware
})

app.use('/extra-route',(req, res, next)=> {
    console.log("second")

    res.send("<html>hey</html>")
    next();
})


app.use('/',(req, res, next)=> {
    console.log("end")

    res.send("<html>hey</html>")

})

//const server = http.createServer(app);

//server.listen(3000);

app.listen(3000)