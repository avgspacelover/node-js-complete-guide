const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));


app.use(adminRoutes);
app.use(shopRoutes);

app.use('/',(req, res, next)=> {
    console.log("end")

    res.send("<html>hey</html>")


})

app.listen(3000);

//get, post etc does an exact pth matching, but not with use