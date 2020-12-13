const express = require('express');
const app = express();
const login = require('./routes/login');
const home = require('./routes/homepage');
const ead = require('./routes/forms_ead');
const lsm = require('./routes/forms_lsm');
const bodyparser = require('body-parser');

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/',home);
app.use('/',login);
app.use('/api',ead);
app.use('/api',lsm);

app.listen(3000,()=>{console.log('Port 3000 is running succesfully')});