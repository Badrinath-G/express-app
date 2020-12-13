const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/ead',(req,res) => {
    console.log('ead page')

    db.connect((err) => {
        if (err) throw err;
        console.log('DB connected');

        let qry = 'SELECT * from forms_eadmodel';
        let ead = [];

        db.query(qry,(err,result) => {
            if(err) throw err;

            result.map((e) => {ead.push({'name' : e.name,'email': e.email,'mobile':e.mobile,'college':e.college,'city':e.city,'startup':e.startup})});

            res.send(ead);
        } )
    });
})

module.exports = router;