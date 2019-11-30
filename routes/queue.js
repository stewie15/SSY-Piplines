const express = require('express');
const router = express.Router();

const queue = [];

router.post('/', newMessage);

function newMessage(req, res) {
    queue.push(req.body.msg);
    res.status(200).end();
}

router.get('/', getMessage);

function getMessage(req, res) {
    if(queue.length === 0){
        res.status(204).end();
    } else {
        res.json(queue.shift());
    }

}

module.exports = router;