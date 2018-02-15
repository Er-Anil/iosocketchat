var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/chatapp.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.to
    socket.broadcast.to(socket.id).emit('chat message', msg);
  });
});

io.on('connection', function(socket){
  socket.on('23', function(msg){
    socket.broadcast.to(socket.id).emit('23', msg);
  });
});

http.listen(4000, function(){
  console.log('listening on : 4000');
});