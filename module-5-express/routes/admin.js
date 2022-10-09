const express = require('express');

const router = express.Router();

//router.post()


router.get('/extra-route',(req, res, next)=> {


    res.send('<html><form action="/admin/product" method="POST">hey<input type="text" name="title"> <button type="submit">submit</button></form></html>')

})

router.post('/product', (req, res,next)=> {
    
    console.log(req.body);
    
    res.redirect('/');
})


module.exports=router;