const express = require('express');
const router = require('./admin');

const router = express.Router();

router.get('/', (req, res,next)=> {
    res.send('<html>whelcome to shop </html>');
})