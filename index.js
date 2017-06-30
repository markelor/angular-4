var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, function(err) {
    if (err) {
        console.log('error');
    } else {
        console.log(config.secret);
    }
});
app.use(express.static(__dirname + '/client/dist/'));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});
