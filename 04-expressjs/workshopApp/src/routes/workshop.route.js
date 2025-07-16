const express = require('express');
const router = express.Router();

const workshops = require('../data/workshop.json');

router.get('/workshops',(req,res) => {
    res.json(workshops);
} );

module.exports = router;