var express = require("express");
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io').listen(server); 
var cors = require('cors');
const port = 8888;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/2', function (req, res) {
  res.sendFile(__dirname + '/index2.html');
});

app.get('/3', function (req, res) {
  res.sendFile(__dirname + '/index3.html');
});

app.get('/ajax-loader.gif', function(req, res){ res.sendFile(__dirname + '/ajax-loader.gif') });

server.listen(process.env.PORT || port, () =>  console.log(`Listening on ${server.address().port}`) );
