const Request = require('request');

function setup() {
    Request.post({
       url: 'http://127.0.0.1:3000/pubsub/subscribe',
       json: {
           url: 'http://127.0.0.1:3000/byteCounter'
       }
    }, function(err, res, body) {
        console.log('Subscription bytecounter successful');
    });

    Request.post({
        url: 'http://127.0.0.1:3000/pubsub/subscribe',
        json: {
            url: 'http://127.0.0.1:3000/stats'
        }
    }, function(err, res, body) {
        console.log('Subscription statscounter successful');
    });
}

module.exports = setup;