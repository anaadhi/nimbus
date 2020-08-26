const express = require('express');
const router = express.Router();
const { parse } = require('path');
const Post = require('../models/Post');

router.get('/', (req,res) => {
    res.render('balance');
});

var id = "5f3ed68ca33bea3d90a23311"


router.post('/',async (req, res) => {
    var amount = Number(req.body.amount);
    console.log(amount);
    try{
        const post = await Post.findById({_id : id});
        var bal = Number(post.balance);
        balances = amount + bal;
            const update = await Post.updateOne(
                { _id : id },
                { $set : { balance : balances } }
            );
            res.redirect('/register/profile')
        }
        catch (err){console.log(err)}
    res.redirect
    });

module.exports = router;