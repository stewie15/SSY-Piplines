const express = require('express');
const router = express.Router();
const Request = require('request');

const subscriptions = [];
const hosts = {};

router.post('/subscribe', subscribe);

function subscribe(req, res) {
    const worker_url = req.body.url;
    subscriptions.push(worker_url);
    res.status(200).end();
}

router.post('/', publish);

function publish(req, res) {
    let msg = req.body.msg;
    let host = req.host;

    for(let sub of subscriptions) {
       Request.post({
           url: sub,
           json: msg
       })
    }
    if(hosts[host] === undefined) {
        hosts[host] = 1
    } else {
        hosts[host] += 1
    }
    res.status(200).end();
}

router.get('/stats', function(req, res) {
    res.json(hosts);
})

module.exports = router;