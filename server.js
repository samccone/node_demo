var express   = require('express');
var webServer = express.createServer();

webServer.set('view engine', 'jade');

webServer.get('/', function(req, res){
  res.render('index');
});


webServer.listen('3000');