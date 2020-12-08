const express = require('express');
const router = express.Router();

router.get('/login',(req,res) => {
    console.log('In the login page')
    res.send('In the Login Page')
})

router.post('/login',(req,res) => {

    console.log('sending the post request...')

    if(req.body.username=='ecell-admin' && req.body.password=='ecelladmin@123'){
        console.log(req.body)
        return true;
    }
    else{
        console.log(req.body)
        return false;
    }
})

module.exports = router;