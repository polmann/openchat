var express = require('express')
var compression = require('compression')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('static'))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

var connectedUsers = {}

io.on('connection', function (socket) {
  socket.on('hello', function (user) {
    socket.emit('usersonline', connectedUsers)
    connectedUsers[socket.id] = user
    socket.broadcast.emit('userconnected', user)
    socket.broadcast.emit('chat', user + ' is connected')
  })

  socket.on('typing', function () {
    var user = connectedUsers[socket.id]
    user = (user) || 'anonymous'
    socket.broadcast.emit('typing', user)
  })

  socket.on('chat', function (msg) {
    var user = connectedUsers[socket.id]
    user = (user) || 'anonymous'
    socket.broadcast.emit('chat', user + ' - ' + msg)
  })

  socket.on('disconnect', function () {
    var user = connectedUsers[socket.id]
    socket.broadcast.emit('userdisconnected', user)
    socket.broadcast.emit('chat', 'user ' + user + ' disconnected')
        // delete user;
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
