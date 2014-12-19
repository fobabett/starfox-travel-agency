// INIT AND LIBRARIES
var express = require('express');
var app = express();
// MIDDLEWARE
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(rew, res) {
  res.render('./index.ejs');
});
// EXPORT THIS FILE AS A MODULE
module.exports.app = app;