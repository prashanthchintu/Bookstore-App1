var express = require('express');
var router = express.Router();

router.get('/show-detail', function(req,res,next){
    res.send('Welcome to Bookstore Admin Portal');
})

module.exports = router;