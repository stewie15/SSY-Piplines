const express = require('express');
const router = express.Router();
const Request = require('request');

let counter = 0;

router.get('/', readBytes);

function readBytes(req, res) {
    res.send('Summe der vesendeten Bytes: ' + counter)
}

function readQueue() {
    setTimeout(readQueue, 500);
    
    Request.get({
        url: 'http://127.0.0.1:3000/queue',
        json: true
    }, function(error, resp, body) {
        if(error.statusCode === 200) {
            counter += body.bytes;
        }
    });

}

module.exports = router;