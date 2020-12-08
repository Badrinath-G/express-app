const express = require('express');
const app = express();
const login = require('./routes/login');
const home = require('./routes/homepage');
const bodyparser = require('body-parser');

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))

app.use('/',home);
app.use('/',login);

app.listen(3000,()=>{console.log('Port 3000 is running succesfully')});