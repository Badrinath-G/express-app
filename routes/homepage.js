const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    console.log('In the homepage')
    res.send('In the homepage')
})

module.exports = router;