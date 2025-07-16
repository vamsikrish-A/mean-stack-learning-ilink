const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    // res.send() is an Express method built on top of Node JS ServerResponse object's res.end(). It automatically sets the appropriate Content-Type header based on the data.
    res.send( 'This is the workshops app. It serves details of workshops happening nearby.' );

});

router.get('/home', (req, res) => {
    res.redirect('/');
});

module.exports=router;