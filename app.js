const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypt = require('bcrypt');
const dotenv = require('dotenv/config');

// middle ware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true,useUnifiedTopology: true },
() => {   console.log('connected to db');  
});

// redirect
app.get('/', (req,res) => {
    res.redirect('/home')
})

// imports
const home = require('./routes/home');
app.use('/home', home);

const reg = require('./routes/register');
app.use('/metro', reg);


// get port
const port = process.env.PORT || 3000;

// serveer
app.listen(port,() => {console.log('listening on port ' + port)})