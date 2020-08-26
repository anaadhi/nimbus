const express = require('express');
const router = express.Router();
const { parse } = require('path');
const bodyParser = require('body-parser');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

const saltRounds = 0;

router.get('/', (req, res) => {
    res.render('register');
}); 

router.post('/', (req, res) => {
 
    if (req.body.password == req.body.password2){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                console.log(hash)
            const post = new Post({
            email: req.body.email,
            pass : hash,
            name : "null",
            balance: "0",
            number: "null",
            DOB : "null"
            });
         
            post.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err)
            })
            res.redirect('/metro/login')
            });
        });
        
    } else{
        console.log("not");
        res.send("password doesnt match")
    }
})

router.get('/profile',async (req,res) => {
    if (id == undefined){
        res.redirect('/home');
    } else {
    try{
    const post = await Post.findById({_id : id});

    res.render('profile', {
        DOB: post.email || "--",
        name: post.name,
        number: post.number,
        bal: post.balance
    });
    }
    catch(err){

    }
}
});

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', async (req, res) => {
    try{
        const post = await Post.findOne({ 'email': req.body.email});
            var hash = post.pass;
            global.id = post.id;
        }
        catch(err){}

        var pass = req.body.pass;
    
    bcrypt.compare(pass , hash, function(err, result) {
        console.log(result);
        if (result == true){
            res.redirect('/metro/profile');
   
        } else {
            res.redirect('/metro/login');
            id = "0"; 
        }
    });
});

router.get('/book', (req,res) => {
    res.render('book', {
        seats: req.body.seats ||"--",
        time: req.body.seats ||":00 hours"
    });
});

router.post('/book', async (req, res) => {
    var cost = Math.abs(Number(req.body.first) - Number(req.body.second));
    cost = cost*20;

    try{
        const post = await Post.findById({_id : id});
        var bal = Number(post.balance);
        if (cost == 0){
            res.send("cost cannot be 0")
        }
        else if (bal >= cost){
        balances = bal - cost;
            const update = await Post.updateOne(
                { _id : id },
                { $set : { balance : balances } }
            );

            global.pin1 = Math.floor(Math.random()*(999-100+1)+100);
            global.pin2 = Math.floor(Math.random()*(999-100+1)+100);
            res.redirect('/metro/book/pin');
        } else {res.redirect('/metro/balance')}
    }
        catch (err){console.log(err)}
    });


router.get('/balance', (req,res) => {
    if (id == undefined){
        res.redirect('/home');
    } else {
    res.render('balance');
    }
});
router.post('/balance',async (req, res) => {
    var amount = Number(req.body.amount);

    try{
        const post = await Post.findById({_id : id});
        var bal = Number(post.balance);
        balances = amount + bal;
            const update = await Post.updateOne(
                { _id : id },
                { $set : { balance : balances } }
            );
            res.redirect('/metro/profile')
        }
        catch (err){console.log(err)}
    });

    router.get('/book/pin', (req, res) => {
        pin = pin1 + " " + pin2;
        res.render("pin", {
            pin : pin
        })
    });

router.get('/edit', (req,res) => {
    res.render("edit")
})




router.post('/profile',async (req, res) => {
    console.log(req.body);

    try{
        const post = await Post.findById({_id : id});
            const update = await Post.updateOne(
                { _id : id },
                { $set : { name : req.body.name, number : req.body.number, email : req.body.email } }
            );
            res.redirect('/metro/profile')
        }
        catch (err){console.log(err)}

    });




module.exports = router;