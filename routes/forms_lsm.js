const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/lsm',(req,res) => {
    console.log('lsm page')

    db.connect((err) => {
        if (err) throw err;
        console.log('DB connected');

        let qry = 'SELECT * from forms_lsmmodel';
        let lsm = [];

        db.query(qry,(err,result) => {
            if(err) throw err;

            result.map((e) => {lsm.push({'name' : e.name,'email': e.email,'mobile':e.mobile,'college':e.college,'city':e.city,'startup':e.startup})});

            res.send(lsm);
        } )
    });
})

module.exports = router;