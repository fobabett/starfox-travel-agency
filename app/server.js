// INIT AND LIBRARIES
var express = require('express');
var app = express();
// MIDDLEWARE
app.use(express.static('public'));

app.get('/', function(rew, res) {

});
// EXPORT THIS FILE AS A MODULE
module.exports.app = app;