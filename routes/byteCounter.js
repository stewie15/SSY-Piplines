const express = require('express');
const router = express.Router();
const Request = require('request');

let bytes = 0;

router.get('/', readBytes);

function readBytes(req, res) {
    res.send('Summe der vesendeten Bytes: ' + bytes);
}

router.post('/', newLogEntry);

function newLogEntry(req, res) {
    bytes += req.body.bytes;
    res.status(200).end();
}

// setTimeout(readQueue, 500);

function readQueue() {
    setTimeout(readQueue, 500);

    Request.get({
        url: 'http://127.0.0.1:3000/queue',
        json: true
    }, countBytes);

    function countBytes(error, response, body) {
        if(response.statusCode === 200) {
            bytes += body.bytes;
        }
        console.log(bytes);
    }
}

module.exports = router;