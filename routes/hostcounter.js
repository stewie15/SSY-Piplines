const express = require('express');
const router = express.Router();

const hosts = {};

router.post('/', function(req, res) {

    let host = req.body.host;

    if(host in hosts) {
        hosts[host] += 1;
   }  else {
       hosts[host] = 1;
   }
    res.status(200).end();
});

router.get('/', function(req, res) {
    res.json(hosts);
})

module.exports = router;