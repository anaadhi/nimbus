const express = require('express');
const router = express.Router();
const { parse } = require('path');

router.get('/', (req,res) => {
    res.render('book', {
        seats: req.body.seats ||"--",
        time: req.body.seats ||"-- : --"
    });
})

module.exports = router;