const express = require('express');
const router = express.Router();
const { parse } = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 0;
const Post = require('../models/Post');

router.get('/', (req,res) => {
    res.render('login')
});
router.post('/', async (req, res) => {

    try{
        const post = await Post.findOne({ 'email': req.body.email});
            var hash = post.pass;
            console.log(hash)
        }
        catch(err){
            console.log(err)
        }
    
        var pass = req.body.pass;
    
    bcrypt.compare(pass , hash, function(err, result) {
        console.log(result);
        if (result == true){
            res.redirect('/register/profile');
        } else {
            res.redirect('/login');
        }
    });
})



module.exports = router;