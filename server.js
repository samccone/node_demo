var express   = require('express');
var Meme      = require('./models/Meme.js');
var webServer = express.createServer();

webServer.set('view engine', 'jade');
webServer.use(express.bodyParser());

webServer.get('/', function(req, res){
  res.render('index');
});

webServer.get('/meme', function(req, res){
  res.render('meme', {'memes': Meme.get()});
});

webServer.get('/meme/new', function(req, res){
  res.render('meme/new');
});

webServer.post('/meme/new', function(req, res){
  Meme.create(req.body, function(){
    res.redirect('/meme');
  });
});

webServer.listen('3000');