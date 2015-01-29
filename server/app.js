// var express = require('express');
// var app = express();
// var cors = require('cors');
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

var socket = require('socket.io');
var express = require('express');
var http = require('http');

var app = express();
// var server = http.createServer(app);


app.use(express.static('../app'));


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

var io = socket.listen(server);

// HTTP ROUTES

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// WEBSOCKET EVENTS

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('client message', function(msg){
    io.emit('server message', 'pingback: ' + msg);
  });
  setTimeout(function(){
    socket.emit('server message', 'tralala')
  }, 1000)
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
