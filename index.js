var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


var connectedUsers = [];

io.on('connection', function(socket) {

  socket.on('hello', function(user) {
    connectedUsers[socket.id] = user;
    socket.broadcast.emit('chat', user + ' is connected');
  });

  socket.on('chat', function(msg) {
    var user = connectedUsers[socket.id];
    user = (user) ? user : 'anonymous';
    io.emit('chat', user +' - '+ msg);
  });

  socket.on('disconnect', function() {
    socket.broadcast.emit('chat', 'user ' +connectedUsers[socket.id]+ ' disconnected');
    delete connectedUsers[socket.id];
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});