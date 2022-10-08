const http= require('http');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// app.use('/',(req, res, next)=> {
//     console.log("always runs")
//     next(); // passes control to next middleware
// })

app.use('/extra-route',(req, res, next)=> {


    res.send('<html><form action="/product" method="POST">hey<input type="text" name="title"> <button type="submit">submit</button></form></html>')

})

app.use('/product', (req, res,next)=> {
    
    console.log(req.body);
    
    res.redirect('/');

})

app.use('/',(req, res, next)=> {
    console.log("end")

    res.send("<html>hey</html>")
    next();

})

//const server = http.createServer(app);

//server.listen(3000);

app.listen(3000)